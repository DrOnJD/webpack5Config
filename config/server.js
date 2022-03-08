const proxy = require('./proxy');


const { PORT } = process.env;

module.exports = {
  client: {
    logging: 'info',
    overlay: {
      errors: true,
      warnings: false,
    },
  },
  compress: true,
  port: PORT || 3000,
  liveReload: true,
  historyApiFallback: true,
  proxy,
};
