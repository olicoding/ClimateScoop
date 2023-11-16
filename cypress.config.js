const { defineConfig } = require("cypress");

module.exports = (on, config) => {
  const cypressConfig = defineConfig({
    chromeWebSecurity: false,
    viewportWidth: 1000,
    viewportHeight: 1000,
    reporter: "junit",
    video: true,
    videoUploadOnPasses: false,
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

  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.name === "chrome") {
      launchOptions.args.push("--disable-dev-shm-usage");
    }
    return launchOptions;
  });

  config.baseUrl = process.env.CYPRESS_BASE_URL || "http://localhost:3000";

  return Object.assign({}, cypressConfig, config);
};
