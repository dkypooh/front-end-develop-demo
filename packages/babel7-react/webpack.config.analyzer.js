const BaseConfig = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

BaseConfig.plugins.push(
  new BundleAnalyzerPlugin()
);

module.exports = BaseConfig;

