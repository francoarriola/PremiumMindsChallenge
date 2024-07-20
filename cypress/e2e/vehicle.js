import { login } from "../support/pageObjects/login";

const loginPage = Cypress.env("endpoint").loginEndpoint;
const { username, password } = Cypress.env("AdminUser");

describe("vehicle", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.url().should("contain", loginPage);
  });
  it("Add new vehicle and remove", () => {
    login.enterUsername(username);
    login.enterPassword(password);
    login.clickSubmit();

    cy.get("#onetrust-button-group")
      .find("#onetrust-accept-btn-handler")
      .click();

    cy.addVehicle().then(() => {
      cy.randomVehicleDelete();
    });

    cy.get("#deletevehicle .close").click({ force: true });
    cy.get("#deleteConfirmModal").should("be.visible", { timeout: 2000 });
    cy.get("a.btn.btn-success").last().click().should("be.visible");
  });
});
