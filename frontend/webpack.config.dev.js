const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
      },
    },
  },
  devtool: 'source-map',
});
