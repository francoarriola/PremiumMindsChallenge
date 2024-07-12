describe("vehicle", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.url().should("contain", "login");
  });
  it("Add new vehicle and remove", () => {
    cy.loginSuccess();
    cy.wait(3000);
    cy.get("#onetrust-button-group")
      .find("#onetrust-accept-btn-handler")
      .click();
    cy.get("#id5").click({ force: true });
    cy.get("#aNewVehicle").click();
    cy.fixture("vehicle").then((data) => {
      const vehicle = data.vehicle;
      cy.get("[name=comment").type(vehicle.vehicleName);
      cy.get("[name=plate]").type(vehicle.plate);
      cy.get("[name=type]").select(vehicle.country);
    });
    cy.get("a[type=submit]")
      .click()
      .then(() => {
        cy.wait(2000);
        cy.get(".btn.btn-small.btn-info.vehiclebtnbig")
          .eq(0)
          .click()
          .then(() => {
            cy.get("a[type=button]").click({ force: true });
            cy.get("#deletevehicle .close").click();
            cy.get("#deleteConfirmModal").should("be.visible");
            cy.get("a.btn.btn-success").last().click();
          });
      });
  });
});
