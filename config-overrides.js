// const webpack = require('webpack');
// module.exports = {
//   webpack: function (config, env) {
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       path: require.resolve('path-browserify'),
//     };
//     return config;
//   },
// };


// import webpack from 'webpack';

// export default {
//   webpack: (config, env) => {
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       path: require.resolve('path-browserify'),
//     };
//     return config;
//   },
// };


// config-overrides.js
const webpack = require('webpack');
module.exports = function override(config, env) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: require.resolve('path-browserify'),  // Polyfill for Node's 'path' module
    };
  
    return config;
  };
  