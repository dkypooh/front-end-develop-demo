const path = require('path');
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bunlde.js'
  },
  module: {
    rules: [{
      test: /\.json$/,
      use: [{
          loader: path.resolve(__dirname, 'json-loader/index.js'),
      }]
    }]
  }
}
