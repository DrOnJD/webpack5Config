/* eslint-disable import/no-extraneous-dependencies */
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const paths = require('./paths');


module.exports = {
  context: paths.src,
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: 'js/chunk.[chunkhash].js',
    chunkFilename: 'js/[id][chunkhash].js',
    path: paths.dist,
    libraryExport: 'default',
  },
  target: 'web',
  resolve: {
    extensions: ['.svelte', '.json', '.mjs', '.js'], // import файлов без разширения
    mainFields: ['svelte', 'browser', 'module', 'main'],
    modules: ['node_modules', 'src'], // корневые директории для импортов
    plugins: [
      new DirectoryNamedWebpackPlugin({ honorIndex: true, exclude: /node_modules/ }), // import компонентов по имени папки
    ],
  },
};
