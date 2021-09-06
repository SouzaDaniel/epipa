const path = require('path');

module.exports = {
  output: {
    publicPath: '/public/',
  },
  resolve: {
    alias: {
      '@': path.resolve('resources/js'),
    },
  },
  devtool: 'source-map',
};
