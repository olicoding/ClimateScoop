const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 1000,
  reporter: "junit",
  video: true,
  videosFolder: "cypress/videos",
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/screenshots",
  reporterOptions: {
    mochaFile: "test-results/cypress/junit-[hash].xml",
  },
  retries: {
    runMode: 3,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
