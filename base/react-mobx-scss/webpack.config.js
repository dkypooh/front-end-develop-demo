const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');



const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

const config = {
  mode: 'none',
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendor', chunks: 'all', priority: 2, minChunks: 2, }
      }
    }
  },
  entry: {
    bundle: './src/client.js',
    vendor: ['react', 'react-dom', 'mobx-react', 'mobx', 'director/build/director', 'prop-types']
  },
  output: { path: path.join(__dirname, 'static'), filename: '[name].js', publicPath: '/static/' },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HappyPack({ id: 'jsx', threads: 4, loaders: ['babel-loader']}),
  ],
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      { test: /\.jsx|js?$/, use: 'happypack/loader?id=jsx', exclude: NODE_MODULES_PATH },
      { test: /\.(sa|sc|c)ss$/, use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], exclude: NODE_MODULES_PATH }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './static'),
    compress: true,
    port: 9000
  }
};


console.warn('current environment is', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  config.mode = 'development';
} else if (process.env.NODE_ENV === 'analyzer') {
  config.mode = 'production';
  config.plugins.push(
    new BundleAnalyzerPlugin()
  );
} else if (process.env.NODE_ENV  === 'production') {
  config.plugins.push(
    new OptimizeCSSAssetsPlugin()
  );
  config.mode = 'production';
  config.optimization.minimize = true;
}

module.exports = config;