/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const plugins = require('./plugins');
const loaders = require('./loaders');
const server = require('./server');


module.exports = merge(common, {
  mode: 'development',
  plugins: plugins('development'),
  module: {
    rules: loaders('development'),
  },
  devServer: server,
  stats: 'errors-warnings',
  devtool: 'inline-source-map',
});
