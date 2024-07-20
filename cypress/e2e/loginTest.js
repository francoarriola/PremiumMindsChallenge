import { login } from "../support/pageObjects/login";

const loginPage = Cypress.env("endpoint").loginEndpoint;
const { username, password } = Cypress.env("AdminUser");

describe("login", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.url().should("contain", loginPage);
  });

  it("The login was succesful", () => {
    login.enterUsername(username);
    login.enterPassword(password);
    login.clickSubmit();
  });
  it("The login was not succesful", () => {
    cy.loginFail();
  });
});
