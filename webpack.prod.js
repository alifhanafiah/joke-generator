const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      /* babel loader */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      /* style and css loader */
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // extract css into files
          },
          {
            loader: 'css-loader', // turns css into commonjs
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      // use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
      // eslint-disable-next-line quotes
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.[contenthash].html',
    }),
  ],
});
