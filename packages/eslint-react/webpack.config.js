const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, './index.js')
  },
  output: {
    filename: '[name].js',
    publicPath: '/static/',
    path: path.resolve(__dirname, './static')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jsx|js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './static'),
    port: 3333,
    compress: true
  }
};
