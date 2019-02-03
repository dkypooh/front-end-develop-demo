const path = require('path');
const MyCustomWebpackPlugin = require('./plugins/my-custom-plugin/index');
const JSONLoaderPath = path.resolve(__dirname, './loaders/json-loader/index');
const MyCustomLoaderPath = path.resolve(__dirname, './loaders/my-custom-loader/index');
const config = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bunlde.js'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        exclude: /node_modules|loaders|plugins/,
        use: [{
          loader: JSONLoaderPath,
        }]
      },
      {
        test: /\.tpl$/,
        exclude: /node_modules|loaders|plugins/,
        use: MyCustomLoaderPath
      }
    ]
  },
  plugins: [
    new MyCustomWebpackPlugin()
  ]
}

console.log('node enviroment is', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'eval'
}

module.exports = config;