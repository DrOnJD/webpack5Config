// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sveltePreprocess = require('svelte-preprocess');

const { src } = require('./paths');


module.exports = (env) => {
  const prod = env !== 'production';
  return ([
    {
      test: /\.js(x)?$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      ],
    },
    {
      test: /\.(svelte)$/,
      use: {
        loader: 'svelte-loader',
        options: {
          preprocess: sveltePreprocess({
            scss: true,
          }),
          compilerOptions: {
            dev: !prod,
          },
          hotReload: !prod,
        },
      },
    },
    {
      // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
      test: /node_modules\/svelte\/.*\.mjs$/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.s?css$/i,
      use: [
        prod ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: {
              compileType: 'module',
              mode: 'local',
              localIdentName: '[local]_[hash:base64:5]',
              localIdentContext: src,
              exportLocalsConvention: 'camelCaseOnly',
            },
          },
        },
        ...(prod ? ['postcss-loader', 'sass-loader'] : ['sass-loader']),
      ],
    },
    {
      test: /\.(png|jpg|svg|gif)/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[contenthash].[ext]',
        },
      }],
    },
  ]);
};
