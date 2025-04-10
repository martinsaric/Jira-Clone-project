const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "cypress-mochawesome-reporter",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: "cypress/e2e/**/*.cy.js"

      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

});
