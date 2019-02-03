const debug = require('debug')('[Loader]');

module.exports = function (source, ...args) {
  if (this.cacheable) this.cacheable();
  var value = typeof source === "string" ? JSON.parse(source) : source;
  value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  debug('执行加载器 JSON-Loader')
  return value;
}
