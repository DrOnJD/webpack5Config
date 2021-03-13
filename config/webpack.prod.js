/* eslint-disable import/no-extraneous-dependencies */
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id][contenthash].css',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
  module: {
    rules: loaders('production'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      maxSize: 244000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  stats: 'normal',
});
