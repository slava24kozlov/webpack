const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
      filename: "index.html",
      title: 'Webpack App',
      favicon: path.resolve(__dirname, './src/public/favicon.png'),
    })
  ],

  //How the different types of modules will be treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile React to JavaScript
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults"
              }],
              '@babel/preset-react'
            ]
          }
        }]
      },
      // Images: Copy public files to build folder
      {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},
      // Fonts and SVGs: Inline files
      {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
      //CSS styles
      {
        test: /\.(sass|scss|css)$/,
        //applying styles to DOM elements
        use: ['style-loader',
          {
            //loading styles
            loader: 'css-loader',
            options: {sourceMap: true, importLoaders: 1, modules: false}
          }
        ]
      }
    ],
  },

  //Options change how modules are resolved
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    descriptionFiles: ['package.json'],
    mainFiles: ['index'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'public'),
    },
  },
}