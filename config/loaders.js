const sveltePreprocess = require('svelte-preprocess');

const { src } = require('./paths');


module.exports = (env) => {
  const prod = env !== 'production';
  return ([
    {
      test: /\.js?$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
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
