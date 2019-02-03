const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const debug = require('debug')('[Completion]')

const compiler = webpack(webpackConfig);

compiler.run((err, state) => {
  debug('compiler error', err)
})
