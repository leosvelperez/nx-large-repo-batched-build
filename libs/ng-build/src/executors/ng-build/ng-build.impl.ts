import { NgTscPlugin, readConfiguration } from '@angular/compiler-cli';
import { dirname, relative } from '@angular/compiler-cli/src/ngtsc/file_system';
import { augmentHostWithVersioning } from '@ngtools/webpack/src/ivy/host';
import {
  ExecutorContext,
  joinPathFragments,
  offsetFromRoot,
  readJsonFile,
  TaskGraph,
} from '@nrwl/devkit';
import { appRootPath } from '@nrwl/tao/src/utils/app-root';
import {
  createProjectGraphAsync,
  ProjectGraph,
} from '@nrwl/workspace/src/core/project-graph';
import {
  calculateProjectDependencies,
  updatePaths,
} from '@nrwl/workspace/src/utilities/buildable-libs-utils';
import { writeJsonFile } from '@nrwl/workspace/src/utilities/fileutils';
import { readTsConfig } from '@nrwl/workspace/src/utilities/typescript';
import { readFileSync } from 'fs';
import { StylesheetProcessor } from 'ng-packagr/lib/styles/stylesheet-processor';
import { resolve } from 'path';
import * as ts from 'typescript';
import { compileSourceFiles } from './compile';
import { NgBuildExecutorOptions } from './schema';
import InvalidatedProjectKind = ts.InvalidatedProjectKind;
import ExitStatus = ts.ExitStatus;

interface TaskProjectDetails {
  configurationName: string;
  projectName: string;
  projectRoot: string;
  targetName: string;
}

export async function batchNgBuild(
  taskGraph: TaskGraph,
  inputs: Record<string, NgBuildExecutorOptions>,
  overrides: NgBuildExecutorOptions,
  context: ExecutorContext
) {
  const taskProjectsDetails: Record<string, TaskProjectDetails> = {};
  const projectsToBuild = new Set<string>();

  Object.entries(taskGraph.tasks).forEach(([taskName, task]) => {
    projectsToBuild.add(task.target.project);
    taskProjectsDetails[taskName] = {
      configurationName: task.target.configuration ?? '',
      projectName: task.target.project,
      projectRoot: task.projectRoot!,
      targetName: task.target.target,
    };
  });

  const genTsConfig = await generateTsConfig(
    taskProjectsDetails,
    inputs,
    projectsToBuild,
    context
  );

  const config = readConfiguration(resolve(genTsConfig));

  await compileSourceFiles(config, new StylesheetProcessor(''));

  Object.values(taskProjectsDetails).forEach((task) => {
    copyProject(task, context);
  });

  // TODO: collect terminal outputs, handle errors
  const results: Record<string, { success: boolean; terminalOutput: string }> =
    Object.keys(taskGraph.tasks).reduce(
      (acc, current) => ({
        ...acc,
        [current]: {
          success: true,
          terminalOutput: '',
        },
      }),
      {} as any
    );

  return results;
}

function copyProject(
  taskProjectDetails: TaskProjectDetails,
  context: ExecutorContext
) {
  const project = context.workspace.projects[taskProjectDetails.projectName];
  const packageJson = readJsonFile(
    joinPathFragments(project.root, 'package.json')
  );
  packageJson.main = './src/index.js';
  packageJson.module = './src/index.js';
  packageJson.esm2015 = './src/index.js';
  const dist = joinPathFragments(
    appRootPath,
    'dist',
    project.root,
    'package.json'
  );
  writeJsonFile(dist, packageJson);
}

async function generateTsConfig(
  taskProjectsDetails: Record<string, TaskProjectDetails>,
  inputs: Record<string, NgBuildExecutorOptions>,
  projectsToBuild: Set<string>,
  context: ExecutorContext
) {
  const tsConfig = `tmp/${context.projectName ?? 'batch'}.tsconfig.json`;
  const generatedTsConfig: any = {
    extends: '../tsconfig.base.json',
    compilerOptions: {
      composite: true,
      declaration: true,
      outDir: '../dist',
    },
    files: [],
  };

  const projGraph = await createProjectGraphAsync();
  const paths = readPaths(joinPathFragments(appRootPath, 'tsconfig.base.json'));

  Object.entries(taskProjectsDetails).forEach(([task, taskProject]) => {
    const taskTsConfig: {
      fileNames?: string[];
    } = readTsConfig(resolve(inputs[task].tsConfig));
    generatedTsConfig.files.push(
      ...(taskTsConfig.fileNames ?? []).map((fileName) =>
        relative(resolve('tmp'), fileName)
      )
    );

    const { dependencies } = calculateProjectDependencies(
      projGraph,
      context.root,
      taskProject.projectName,
      taskProject.targetName,
      taskProject.configurationName
    );
    const builtDeps = dependencies.filter(
      (dep) => !projectsToBuild.has(dep.node.name)
    );

    updatePaths(builtDeps, paths);
  });
  generatedTsConfig.compilerOptions.paths = {
    ...(generatedTsConfig.compilerOptions.paths ?? {}),
    ...paths,
  };
  writeJsonFile(tsConfig, generatedTsConfig);

  return tsConfig;
}

function readPaths(tsConfig: string) {
  try {
    const parsedTSConfig = ts.readConfigFile(tsConfig, ts.sys.readFile).config;
    if (
      parsedTSConfig.compilerOptions &&
      parsedTSConfig.compilerOptions.paths
    ) {
      return parsedTSConfig.compilerOptions.paths;
    } else if (parsedTSConfig.extends) {
      return readPaths(resolve(dirname(tsConfig), parsedTSConfig.extends));
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

// TODO: simplify this to only run for one project
export default async function runExecutor(
  options: NgBuildExecutorOptions,
  context: ExecutorContext
) {
  const projGraph = await createProjectGraphAsync();

  const genTsConfig = genTmpTsConfigs(
    projGraph,
    options.tsConfig,
    context.projectName!
  );

  const config = readConfiguration(resolve(genTsConfig));
  const compilerOptions = config.options;
  const ngtsc = new NgTscPlugin(compilerOptions);

  const solutionHost = ts.createSolutionBuilderHost(
    ts.sys,
    (rootNames, options, host) => {
      const wrappedHost = ngtsc.wrapHost(
        host as any,
        rootNames as any,
        options as any
      ) as any;
      augmentHostWithVersioning(wrappedHost);
      const orig = wrappedHost.readFile;

      wrappedHost.readFile = (fileName) => {
        if (fileName.endsWith('.scss')) {
          const content = orig.call(wrappedHost, fileName);
          const transformed = renderScss(fileName, content);
          return transformed;
        } else {
          return orig.call(wrappedHost, fileName);
        }
      };

      return ts.createIncrementalProgram({
        options,
        rootNames,
        host: wrappedHost,
      } as any);
    }
  );

  const solution = ts.createSolutionBuilder(solutionHost, [genTsConfig], {});

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const project = solution.getNextInvalidatedProject();

    if (!project) {
      return { success: true };
    }

    if (project.kind === InvalidatedProjectKind.UpdateOutputFileStamps) {
      console.log(`timestamps ${project.project}`);
      project.done();
      continue;
    }

    console.log(`building ${project.project}`);
    const program = (project as any).getProgram();

    const { ignoreForEmit, ignoreForDiagnostics } =
      ngtsc.setupCompilation(program);

    const prepareEmit = ngtsc.compiler.prepareEmit();
    const status = project.done(
      undefined as any,
      undefined as any,
      prepareEmit.transformers as any
    );
    if (status !== ExitStatus.Success) {
      return { success: false };
    }
  }
}

function genTmpTsConfigs(
  p: ProjectGraph,
  tsConfig: string,
  projectName: string
) {
  const projectReferences = [] as any[];
  p.dependencies[projectName].forEach((d) => {
    const targets = p.nodes[d.target].data.targets;
    if (!targets) return;

    const depTsConfig = targets['build'].options.tsConfig;
    const refRelativePath = relative(dirname(tsConfig), depTsConfig);

    // this should be generalized
    projectReferences.push({
      path: refRelativePath,
    });
    genTmpTsConfigs(p, depTsConfig, d.target);
  });

  const generatedTsConfigPath = tsConfig.replace('libs/', 'tmp/');

  const dist = `${offsetFromRoot(p.nodes[projectName].data.root)}dist`;
  const generatedTsConfig: any = {
    compilerOptions: {
      composite: true,
      declaration: true,
      outDir: dist,
      tsBuildInfoFile: `${dist}/${p.nodes[projectName].data.root}/tsbuildinfo`,
    },
  };

  generatedTsConfig.extends = relative(
    dirname(generatedTsConfigPath),
    tsConfig
  );
  generatedTsConfig.references = projectReferences;

  // should be generalized. write tsconfig only when references are different
  // for now we assume that the don't change
  try {
    readFileSync(generatedTsConfigPath);
  } catch (e) {
    writeJsonFile(generatedTsConfigPath, generatedTsConfig);
  }
  return generatedTsConfigPath;
}

function renderScss(
  filePath: string,
  content: string,
  styleIncludePaths?: string[]
): string {
  // TODO: use node-sass if installed
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const sassCompiler = require('sass') as any;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const importer = require('node-sass-tilde-importer');
  const res = sassCompiler
    .renderSync({
      file: filePath,
      data: content,
      indentedSyntax: false,
      importer,
      includePaths: styleIncludePaths,
    })
    .css.toString();

  return res;
}
