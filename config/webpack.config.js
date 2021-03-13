/* eslint-disable */
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');

const isDev = process.env.NODE_ENV === 'development';

const settings = {
  context: paths.src,
  mode: process.env.NODE_ENV,
  entry: ['@babel/polyfill', './index.jsx'],
  output: {
    filename: `${isDev ? '[name]' : 'chunk'}.[chunkhash].js`,
    path: paths.dist,
    libraryExport: 'default',
  },
  target: 'web',
  plugins: [
    new ESLintPlugin({
      context: paths.root,
      extensions: ['js', 'jsx'],
      exclude: ['config', 'node_modules'],
      quiet: false,
    }),
    new HotModuleReplacementPlugin(),
    new DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new HtmlWebpackPlugin({ template: paths.indexHTML, inject: true }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id][contenthash].css',
    }),
  ],
  module: {
    rules: require('./loaders'),
  },
  optimization: require('./optimization'),
  devServer: require('./server'),
  stats: 'errors-warnings',
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json', '.css', '.scss'], // import файлов без разширения
    modules: ['node_modules', 'src'], // корневые директории для импортов
    plugins: [
      new DirectoryNamedWebpackPlugin({ honorIndex: true }), // import компонентов по имени папки
    ],
  },
};

if(isDev) settings.devtool = 'inline-source-map'

module.exports = settings;