const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

module.exports = {
  mode: 'production',
  entry: {
    bundle: './src/client.js'
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HappyPack({
      id: 'jsx',
      threads: 4,
      loaders: [ 'babel-loader' ]
    }),
    new HappyPack({
      id: 'styles',
      threads: 4,
      loaders: ['style-loader', 'css-loader', 'sass-loader' ]
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'happypack/loader?id=jsx',
      exclude: NODE_MODULES_PATH,
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: 'happypack/loader?id=styles',
      exclude: NODE_MODULES_PATH,
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, './static'),
    compress: true,
    port: 9000
  }
};
