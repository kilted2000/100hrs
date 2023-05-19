const path = require('path');

module.exports = {
  // ... other webpack config options

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  // ... other webpack config options
};
