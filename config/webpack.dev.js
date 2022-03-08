const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const paths = require('./paths');
const loaders = require('./loaders');


module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new ESLintPlugin({
      context: paths.root,
      extensions: ['js', 'jsx'],
      exclude: ['config', 'node_modules'],
      quiet: false,
    }),
    new DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new HtmlWebpackPlugin({ template: paths.indexHTML, inject: true }),
  ],
  module: {
    rules: loaders('development'),
  },
  devServer: require('./server'), //eslint-disable-line
  stats: 'errors-warnings',
  devtool: 'inline-source-map',
});
