const { PORT } = process.env;

module.exports = {
  clientLogLevel: 'warning',
  inline: true,
  overlay: true,
  compress: true,
  port: PORT || 3000,
  hot: true,
  watchContentBase: true,
  historyApiFallback: true,
  proxy: {
    '/api': 'http://localhost:3000',
  },
};
