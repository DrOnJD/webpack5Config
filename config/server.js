const proxy = require('./proxy');


const { PORT } = process.env;

module.exports = {
  client: {
    logging: 'warn',
    overlay: {
      errors: true,
      warnings: false,
    },
  },
  compress: true,
  port: PORT || 3000,
  historyApiFallback: true,
  proxy,
};
