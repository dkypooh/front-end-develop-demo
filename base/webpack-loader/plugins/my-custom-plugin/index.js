const debug = require('debug')('[Plugin]')

// 一个 JavaScript 命名函数。
function MyCustomWebpackPlugin() {

};

// 在插件函数的 prototype 上定义一个 `apply` 方法。
MyCustomWebpackPlugin.prototype.apply = function(compiler) {
  compiler.hooks.compile.tap('MyPlugin', hook => {
    debug('以同步方式触及 compile 钩子。');
  });

  compiler.hooks.compilation.tap('compilation', (hook) => {
    debug('编译(compilation)创建之后，执行插件。')
  })

  compiler.hooks.emit.tap('beforeOutput', (hook) => {
    debug('生成资源到 output 目录之前。')
  })
  compiler.hooks.done.tap('done', () => {
    debug('编译(compilation)完成。')
  })

};

module.exports = MyCustomWebpackPlugin