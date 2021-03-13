const { PORT } = process.env;

module.exports = {
  clientLogLevel: 'error',
  publicPath: '/',
  compress: true,
  port: PORT || 3000,
  hot: true,
  watchContentBase: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  proxy: {
    '/api': 'http://localhost:3000',
  },
};
