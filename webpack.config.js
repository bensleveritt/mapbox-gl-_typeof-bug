const { resolve } = require('path');

const SRC = resolve(__dirname, 'src');
const BUILD = resolve(__dirname, 'build');

module.exports = env => (
  {
    context: SRC,
    entry: {
      app: './index.js',
    },
    output: {
      path: BUILD,
      filename: '[name].js',
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, loaders: ['babel'] },
      ],
    },
    devtool: 'eval',
    devServer: {
      stats: 'errors-only',
      host: 'localhost',
      port: 3000,
    }
  }
);
