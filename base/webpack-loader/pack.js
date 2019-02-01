const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

compiler.run((err, state) => {
  console.log('compiler error', err)
})
