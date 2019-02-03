const debug = require('debug')('[Loader]');

module.exports = function (source, ...args) {
  if (this.cacheable) this.cacheable();
  debug('执行加载器 My-Custom-Loader')
  return `module.exports = '${source}'`;
}
