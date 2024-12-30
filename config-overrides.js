const webpack = require('webpack');

module.exports = function override(config) {
  // Add polyfills for Webpack 5
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve('path-browserify')
  };

  // Add plugins to define Node.js globals like process and Buffer
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  );

  return config;
};
