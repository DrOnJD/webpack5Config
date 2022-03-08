const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const paths = require('./paths');
const loaders = require('./loaders');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
    new HtmlWebpackPlugin({ template: paths.indexHTML, inject: true }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  module: {
    rules: loaders('production'),
  },
  optimization: {
    minimize: true,
    minimizer: [
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
