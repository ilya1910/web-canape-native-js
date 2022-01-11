const path = require('path')
const miniCss = require('mini-css-extract-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
    new HTMLPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
