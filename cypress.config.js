const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://reqres.in/',
    specPattern: 'cypress/apiTests/*.js', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
