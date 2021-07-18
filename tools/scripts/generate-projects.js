const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const { names, readJsonFile, writeJsonFile } = require('@nrwl/devkit');
const ora = require('ora');

const apps = [
  {
    name: 'app0',
    buildableLibs: true,
  },
  {
    name: 'app1',
    buildableLibs: false,
  },
];
const config = {
  numberOfLibsPerLevel: [3, 5, 5],
  numberOfComponentsPerLib: 200,
};

function componentName(component) {
  return names(component).className + 'Component';
}

function moduleName(libName) {
  return names(libName).className + 'Module';
}

function generateLib(appName, libName, level, buildableLib) {
  let spinner = ora(`generating ${libName} for ${appName}`).start();

  execSync(
    `yarn nx g @nrwl/angular:lib ${libName} --directory=${appName} --simpleModuleName${
      buildableLib ? ' --buildable' : ''
    }`
  );

  if (buildableLib) {
    const ws = readJsonFile('workspace.json');
    ws.projects[`${appName}-${libName}`].targets.build = {
      executor: './build/libs/ng-build:ng-build',
      configurations: {
        development: {
          tsConfig: `./libs/${appName}/${libName}/tsconfig.lib.json`,
        },
        production: {
          tsConfig: `./libs/${appName}/${libName}/tsconfig.lib.prod.json`,
        },
      },
      defaultConfiguration: 'production',
    };
    writeJsonFile('workspace.json', ws);

    const packageJson = readJsonFile(`libs/${appName}/${libName}/package.json`);
    packageJson.name = `@nx-large-repo/${appName}/${libName}`;
    writeJsonFile(`libs/${appName}/${libName}/package.json`, packageJson);
  }

  spinner.succeed();

  spinner = ora('generating components').start();

  const componentNames = [];

  for (let i = 0; i < config.numberOfComponentsPerLib; i++) {
    componentNames.push(`${libName}component${i}`);
  }

  componentNames.forEach((componentName, index) => {
    execSync(
      `yarn nx g @nrwl/angular:component ${componentName} --project=${appName}-${libName}`
    );
  });

  spinner.succeed('generating components');

  execSync(
    `yarn nx g @nrwl/angular:component ${libName}parent --project=${appName}-${libName} --export`
  );

  const componentImports = componentNames
    .map(
      (component) =>
        `import { ${componentName(
          component
        )} } from './${component}/${component}.component';`
    )
    .join('\n');
  const parentComponentImport = `import { ${componentName(
    libName + 'parent'
  )} } from './${libName}parent/${libName}parent.component';`;

  const ngModuleDeclarations = [...componentNames, `${libName}parent`]
    .map((component) => componentName(component))
    .join(', ');

  const exports = `export * from './lib/${libName}.module';
export * from './lib/${libName}parent/${libName}parent.component';`;

  writeFileSync(`libs/${appName}/${libName}/src/index.ts`, exports);

  let selectors = componentNames
    .map((c) => `<nx-large-repo-${c}></nx-large-repo-${c}>`)
    .join('\n');

  if (level < config.numberOfLibsPerLevel.length - 1) {
    const childLibNames = generateLibs(
      appName,
      buildableLib,
      level + 1,
      libName
    );

    selectors += `\n${childLibNames
      .map((lib) => `<nx-large-repo-${lib}parent></nx-large-repo-${lib}parent>`)
      .join('\n')}`;

    const childLibModuleImports = childLibNames
      .map(
        (libName) =>
          `import { ${moduleName(
            libName
          )} } from '@nx-large-repo/${appName}/${libName}';`
      )
      .join('\n');

    const ngModuleImports = childLibNames
      .map((libName) => moduleName(libName))
      .join(', ');

    writeFileSync(
      `libs/${appName}/${libName}/src/lib/${libName}.module.ts`,
      `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
${componentImports}
${parentComponentImport}
${childLibModuleImports}

@NgModule({
  imports: [CommonModule, ${ngModuleImports}],
  declarations: [${ngModuleDeclarations}],
  exports: [${componentName(libName + 'parent')}],
})
export class ${moduleName(libName)} {}
`
    );
  }

  writeFileSync(
    `libs/${appName}/${libName}/src/lib/${libName}parent/${libName}parent.component.html`,
    `<div>
  ${selectors}
</div>`
  );
}

function generateLibs(appName, buildableLibs, level = 0, parentLibName) {
  const libNames = [];

  for (let i = 0; i < config.numberOfLibsPerLevel[level]; i++) {
    const libName = parentLibName ? `${parentLibName}-lib${i}` : `lib${i}`;
    libNames.push(libName);
    generateLib(appName, libName, level, buildableLibs);
  }

  return libNames;
}

function generateApp(app) {
  const spinner = ora(`generating ${app.name}`).start();

  execSync(
    `yarn nx g @nrwl/angular:app ${app.name} --styles=scss --routing --no-interactive`
  );

  if (app.buildableLibs) {
    const ws = readJsonFile('workspace.json');
    ws.projects[app.name].targets.build.executor =
      '@nrwl/angular:webpack-browser';
    ws.projects[app.name].targets.serve = {
      ...ws.projects[app.name].targets.serve,
      executor: '@nrwl/web:file-server',
      configurations: {
        development: {
          buildTarget:
            ws.projects[app.name].targets.serve.configurations.development
              .browserTarget,
        },
        production: {
          buildTarget:
            ws.projects[app.name].targets.serve.configurations.production
              .browserTarget,
        },
      },
      defaultConfiguration: 'development',
    };
    writeJsonFile('workspace.json', ws);
  }

  spinner.succeed();

  const libNames = generateLibs(app.name, app.buildableLibs);

  const selectors = libNames
    .map((lib) => `<nx-large-repo-${lib}parent></nx-large-repo-${lib}parent>`)
    .join('\n');

  writeFileSync(
    `apps/${app.name}/src/app/app.component.html`,
    `<div>
  ${selectors}
</div>`
  );

  const imports = libNames
    .map(
      (libName) =>
        `import { ${moduleName(libName)} } from '@nx-large-repo/${
          app.name
        }/${libName}';`
    )
    .join('\n');

  const moduleImports = libNames
    .map((libName) => moduleName(libName))
    .join(', ');

  writeFileSync(
    `apps/${app.name}/src/app/app.module.ts`,
    `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

${imports}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ${moduleImports}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
`
  );
}

apps.forEach((app) => generateApp(app));
