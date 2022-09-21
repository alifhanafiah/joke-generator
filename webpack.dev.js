const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      /* style and css loader */
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // inject style into DOM
          },
          {
            loader: 'css-loader', // turns css into commonjs
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
});
