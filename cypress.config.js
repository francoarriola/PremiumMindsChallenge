const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*",
    baseUrl: "https://app.telpark.com/pt/",
  },
  env: {
    AdminUser: {
      username: "francodoblecuenta@gmail.com",
      password: "soyfranco1234",
    },
    endpoint: {
      loginEndpoint: "/auth",
    },
  },
});
