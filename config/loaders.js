const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { src } = require('./paths');

const isDev = process.env.NODE_ENV === 'development';

module.exports = [
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
      isDev ? 'style-loader' : {
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: false,
        },
      },
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
      'sass-loader',
    ],
  },
  {
    test: /\.(png|jpg|svg|gif)/i,
    use: ['file-loader'],
  },
];
