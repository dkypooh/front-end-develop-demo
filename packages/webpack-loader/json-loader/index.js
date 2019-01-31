module.exports = function (source, ...args) {
  if (this.cacheable) this.cacheable();
  console.error('args',source, ...args);

  var value = typeof source === "string" ? JSON.parse(source) : source;

  value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return value;
}
