import * as ng from '@angular/compiler-cli';
import { logger } from '@nrwl/devkit';
import { StylesheetProcessor } from 'ng-packagr/lib/styles/stylesheet-processor';
import * as ts from 'typescript';
import { cacheCompilerHost } from './cache-compiler-host';

export async function compileSourceFiles(
  tsConfig: ng.ParsedConfiguration,
  stylesheetProcessor: StylesheetProcessor
) {
  const tsCompilerHost = cacheCompilerHost(
    tsConfig.options,
    ts.createModuleResolutionCache(process.cwd(), (s) => s),
    stylesheetProcessor
  );

  const ngCompilerHost = ng.createCompilerHost({
    options: tsConfig.options,
    tsHost: tsCompilerHost,
  });

  console.time('ng.createProgram');
  const ngProgram = ng.createProgram({
    rootNames: tsConfig.rootNames,
    options: tsConfig.options,
    host: ngCompilerHost,
  });
  console.timeEnd('ng.createProgram');

  console.time('ngProgram.loadNgStructureAsync');
  await ngProgram.loadNgStructureAsync();
  console.timeEnd('ngProgram.loadNgStructureAsync');

  console.time('get allDiagnostics');
  const allDiagnostics = [
    ...ngProgram.getTsOptionDiagnostics(),
    ...ngProgram.getNgOptionDiagnostics(),
    ...ngProgram.getTsSyntacticDiagnostics(),
    ...ngProgram.getTsSemanticDiagnostics(),
    ...ngProgram.getNgSemanticDiagnostics(),
    ...ngProgram.getNgStructuralDiagnostics(),
  ];
  console.timeEnd('get allDiagnostics');

  console.time('emit');
  // if we have an error we don't want to transpile.
  const hasError = ng.exitCodeFromResult(allDiagnostics) > 0;
  if (!hasError) {
    const emitFlags = tsConfig.options.declaration
      ? tsConfig.emitFlags
      : ng.EmitFlags.JS;
    // certain errors are only emitted by a compilation hence append to previous diagnostics
    const { diagnostics } = ngProgram.emit({
      emitFlags,
    });

    allDiagnostics.push(...diagnostics);
  }
  console.timeEnd('emit');

  if (allDiagnostics.length === 0) {
    return;
  }

  console.time('log diagnostics');
  const exitCode = ng.exitCodeFromResult(allDiagnostics);
  const formattedDiagnostics = ng.formatDiagnostics(allDiagnostics);
  if (exitCode !== 0) {
    throw new Error(formattedDiagnostics);
  } else {
    logger.info(formattedDiagnostics);
  }
  console.timeEnd('log diagnostics');
}
