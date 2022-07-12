const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/',
  }
})