import * as ng from '@angular/compiler-cli';
import { logger } from '@nrwl/devkit';
import { FileCache } from 'ng-packagr/lib/file-system/file-cache';
import { StylesheetProcessor } from 'ng-packagr/lib/styles/stylesheet-processor';
import * as path from 'path';
import * as ts from 'typescript';

export function cacheCompilerHost(
  compilerOptions: ng.CompilerOptions,
  moduleResolutionCache: ts.ModuleResolutionCache,
  stylesheetProcessor: StylesheetProcessor,
  sourcesFileCache: FileCache = new FileCache()
): ng.CompilerHost {
  const tsHost = ts.createCompilerHost(compilerOptions, true);
  const compilerHost = ng.createCompilerHost({
    options: compilerOptions,
    tsHost,
  });

  return {
    ...compilerHost,

    fileExists: (fileName: string) => {
      const cache = sourcesFileCache.getOrCreate(fileName);
      if (cache.exists === undefined) {
        cache.exists = compilerHost.fileExists(fileName);
      }
      return cache.exists;
    },

    getSourceFile: (fileName: string, languageVersion: ts.ScriptTarget) => {
      const cache = sourcesFileCache.getOrCreate(fileName);
      if (!cache.sourceFile) {
        cache.sourceFile = compilerHost.getSourceFile(
          fileName,
          languageVersion
        );
      }
      return cache.sourceFile;
    },

    writeFile: (
      fileName: string,
      data: string,
      writeByteOrderMark: boolean,
      onError?: (message: string) => void,
      sourceFiles?: ReadonlyArray<ts.SourceFile>
    ) => {
      if (fileName.endsWith('.d.ts')) {
        sourceFiles?.forEach((source) => {
          const cache = sourcesFileCache.getOrCreate(source.fileName);
          if (!cache.declarationFileName) {
            cache.declarationFileName = path.normalize(fileName);
          }
        });
      }

      compilerHost.writeFile(
        fileName,
        data,
        writeByteOrderMark,
        onError,
        sourceFiles
      );
    },

    readFile: (fileName: string) => {
      const cache = sourcesFileCache.getOrCreate(fileName);
      if (cache.content === undefined) {
        cache.content = compilerHost.readFile(fileName);
      }
      return cache.content;
    },

    // ng specific
    moduleNameToFileName: (moduleName: string, containingFile: string) => {
      const { resolvedModule } = ts.resolveModuleName(
        moduleName,
        path.normalize(containingFile),
        compilerOptions,
        compilerHost,
        moduleResolutionCache
      );

      return resolvedModule ? resolvedModule.resolvedFileName : null;
    },

    resolveModuleNames: (moduleNames: string[], containingFile: string) => {
      return moduleNames.map((moduleName) => {
        const { resolvedModule } = ts.resolveModuleName(
          moduleName,
          path.normalize(containingFile),
          compilerOptions,
          compilerHost,
          moduleResolutionCache
        );

        return resolvedModule;
      });
    },

    resourceNameToFileName: (
      resourceName: string,
      containingFilePath: string
    ) => {
      const resourcePath = path.resolve(
        path.dirname(containingFilePath),
        resourceName
      );

      return resourcePath;
    },

    readResource: (fileName: string) => {
      const cache = sourcesFileCache.getOrCreate(fileName);
      if (cache.content === undefined) {
        if (/(html|htm|svg)$/.test(path.extname(fileName))) {
          // template
          cache.content = compilerHost.readFile(fileName);
        } else {
          // stylesheet
          try {
            cache.content = stylesheetProcessor.process(fileName);
          } catch (err) {
            logger.error(
              '\n' + err.message + ` in stylesheet file ${fileName}.`
            );
            throw err;
          }
        }

        if (cache.content === undefined) {
          throw new Error(`Cannot read file ${fileName}.`);
        }

        cache.exists = true;
      }

      return cache.content;
    },
  };
}
