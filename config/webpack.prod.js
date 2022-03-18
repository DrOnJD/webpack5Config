/* eslint-disable import/no-extraneous-dependencies */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const plugins = require('./plugins');
const loaders = require('./loaders');


module.exports = merge(common, {
  mode: 'production',
  plugins: plugins('production'),
  module: {
    rules: loaders('production'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      maxSize: 244000,
    },
  },
  stats: 'normal',
});
