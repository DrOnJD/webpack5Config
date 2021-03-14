/* eslint-disable import/no-extraneous-dependencies */
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const paths = require('./paths');


module.exports = {
  context: paths.src,
  entry: ['@babel/polyfill', './index.jsx'],
  output: {
    filename: 'js/chunk.[chunkhash].js',
    chunkFilename: 'js/[id][chunkhash].js',
    path: paths.dist,
    libraryExport: 'default',
  },
  target: 'web',
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json', '.css', '.scss'], // import файлов без разширения
    modules: ['node_modules', 'src'], // корневые директории для импортов
    plugins: [
      new DirectoryNamedWebpackPlugin({ honorIndex: true }), // import компонентов по имени папки
    ],
  },
};
