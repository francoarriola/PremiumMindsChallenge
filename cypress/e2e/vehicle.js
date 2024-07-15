describe("vehicle", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.url().should("contain", "login");
  });
  it("Add new vehicle and remove", () => {
    let randomIndex=0;
    
    cy.loginSuccess();
    cy.wait(3000);
    cy.get("#onetrust-button-group")
      .find("#onetrust-accept-btn-handler")
      .click();
    cy.get("#id5").click({ force: true });
    cy.get("#aNewVehicle").click();
    cy.fixture("vehicle").then((data) => {
      const vehicle = data.vehicle;
      cy.get("[name=comment]").type(vehicle.vehicleName);
      cy.get("[name=plate]").type(vehicle.plate);
      cy.get("[name=type]").select(vehicle.country);
    });
    cy.get("a[type=submit]")
      .click()
      .then(() => {
        cy.wait(2000);

      });
      cy.get(".btn.btn-small.btn-info.vehiclebtnbig")
      .its("length")
        .then((count) => {
          randomIndex=Cypress._.random(count - 1)
          cy.get(".btn.btn-small.btn-info.vehiclebtnbig").eq(randomIndex).click()
          cy.wait(1000)
          cy.get("a[class=close]").click({ force: true });
          cy.get("#deletevehicle .close").click({ force: true });
          cy.get("#deleteConfirmModal").should("be.visible");
          cy.get("a.btn.btn-success").last().click();
          cy.get(".btn.btn-small.btn-info.vehiclebtnbig").should("not.exist")
        });
    });
});
