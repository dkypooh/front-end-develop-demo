const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



const config = {
  mode: 'production',
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
    new webpack.HotModuleReplacementPlugin()
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

console.warn('current environment is', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  config.mode = 'development';
} else if (process.env.NODE_ENV === 'analyzer') {
  config.plugins.push(
    new BundleAnalyzerPlugin()
  );
}

module.exports = config;
