/* eslint-disable import/no-extraneous-dependencies */
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const compact = require('lodash/compact');

const paths = require('./paths');


module.exports = (env) => compact([
  new DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
  new HtmlWebpackPlugin({ template: paths.indexHTML, inject: true, publicPath: '/' }),
  env === 'development' && new ESLintPlugin({
    context: paths.root,
    extensions: ['js', 'jsx'],
    exclude: ['config', 'node_modules'],
    quiet: false,
  }),
  env === 'development' && new CleanTerminalPlugin(),
  env === 'production' && new CleanWebpackPlugin(),
  env === 'production' && new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
  }),
  new MiniCssExtractPlugin({
    filename: env === 'development' ? 'css/[name].css' : 'css/[name].[contenthash].css',
    chunkFilename: env === 'development' ? 'css/[id].css' : 'css/[id][contenthash].css',
  }),
]);

