/* eslint-disable import/no-extraneous-dependencies */
const { realpathSync } = require('fs');

const path = require('path');


const appDirectory = realpathSync(process.cwd());
const resolve = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  root: appDirectory,
  src: resolve('src'),
  dist: resolve('dist'),
  indexHTML: resolve('public/index.html'),
};
