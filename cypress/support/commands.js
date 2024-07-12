Cypress.Commands.add("loginSuccess", () => {
  cy.get("#username").type("francodoblecuenta@gmail.com");
  cy.get("#password").type("soyfranco1234");
  cy.get("input[type=submit]").click();
  cy.get("#aLogout").should("exist");
});
Cypress.Commands.add("loginFail", () => {
  cy.get("#username").type("francodoblecuenta@gmail.com");
  cy.get("#password").type("nosoyfranco1234");
  cy.get("input[type=submit]").click();
  cy.get("span[class=kc-feedback-text]").should("exist");
});
