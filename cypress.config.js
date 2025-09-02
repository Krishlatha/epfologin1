const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Allure reporter configuration
      allureCypress(on, config, {
        resultsDir: "allure-results", // Optional, can be customized
      });

      return config;
    },
  },
});
