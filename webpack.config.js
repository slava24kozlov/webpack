const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: '/dist',
    filename: '[name].bundle.js',
    publicPath: './public',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
    filename: "index.html",
    title: 'Webpack App',
    favicon: './public/favicon.png',
  })],
}