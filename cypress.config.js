const { defineConfig } = require('cypress');
const webpackConfig = require('./internals/webpack/webpack.cypress.babel');

module.exports = defineConfig({
  video: false,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
      return config;
    },
  },
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
});
