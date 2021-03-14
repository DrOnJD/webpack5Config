// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { src } = require('./paths');


module.exports = (env) => ([
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
    test: /\.s?css$/i,
    use: [
      env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
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
      ...(env === 'production' ? ['postcss-loader', 'sass-loader'] : ['sass-loader']),
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
