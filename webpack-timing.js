// import { Compiler, Compilation } from 'webpack';

let WebpackTimingPlugin = function () {};

const pluginName = WebpackTimingPlugin.name;

WebpackTimingPlugin.prototype.apply = function (compiler) {
  compiler.hooks.thisCompilation.tap(pluginName, () => {
    console.time('AngularWebpackPlugin');
  });

  compiler.hooks.compilation.tap(pluginName, (compilation) => {
    compilation.hooks.seal.tap(pluginName, () => {
      console.timeEnd('AngularWebpackPlugin');
      console.time('after angular compilation');
      console.time('seal');
    });

    compilation.hooks.optimizeDependencies.tap(pluginName, () => {
      console.timeEnd('seal');
      console.time('optimizeDependencies');
    });

    compilation.hooks.afterOptimizeDependencies.tap(pluginName, () => {
      console.timeEnd('optimizeDependencies');
      console.time('afterOptimizeDependencies');
    });

    compilation.hooks.optimize.tap(pluginName, () => {
      console.timeEnd('afterOptimizeDependencies');
      console.time('optimize');
    });

    compilation.hooks.optimizeModules.tap(pluginName, () => {
      console.timeEnd('optimize');
      console.time('optimizeModules');
    });

    compilation.hooks.afterOptimizeModules.tap(pluginName, () => {
      console.timeEnd('optimizeModules');
      console.time('afterOptimizeModules');
    });

    compilation.hooks.optimizeChunks.tap(pluginName, () => {
      console.timeEnd('afterOptimizeModules');
      console.time('optimizeChunks');
    });

    compilation.hooks.afterOptimizeChunks.tap(pluginName, () => {
      console.timeEnd('optimizeChunks');
      console.time('afterOptimizeChunks');
    });

    compilation.hooks.optimizeTree.tap(pluginName, () => {
      console.timeEnd('afterOptimizeChunks');
      console.time('optimizeTree');
    });

    compilation.hooks.afterOptimizeTree.tap(pluginName, () => {
      console.timeEnd('optimizeTree');
      console.time('afterOptimizeTree');
    });
  });

  compiler.hooks.afterCompile.tap(pluginName, () => {
    console.time('after compile');
  });

  compiler.hooks.emit.tap(pluginName, () => {
    console.time('emit');
  });
  compiler.hooks.afterEmit.tap(pluginName, () => {
    console.timeEnd('emit');
  });

  compiler.hooks.done.tap(pluginName, () => {
    console.timeEnd('after compile');
    console.timeEnd('after angular compilation');
  });
};

module.exports = WebpackTimingPlugin;
