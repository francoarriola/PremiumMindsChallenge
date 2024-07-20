Cypress.Commands.add("loginFail", () => {
  cy.get("#username").type("francodoblecuenta@gmail.com");
  cy.get("#password").type("nosoyfranco1234");
  cy.get("input[type=submit]").click();
  cy.get("span[class=kc-feedback-text]").should("exist");
});

Cypress.Commands.add("addVehicle", () => {
  cy.get("#id5").click({ force: true });
  cy.get("#aNewVehicle").click();
  cy.fixture("vehicle.json").then((data) => {
    const vehiclesNumber = data.length;
    const randomIndex = Math.floor(Math.random() * vehiclesNumber);
    const vehicleNew = data[randomIndex];

    cy.get("[name=comment]").type(vehicleNew.vehicleName);
    cy.get("[name=plate]").type(vehicleNew.plate);
    cy.get("[name=type]").select(vehicleNew.country);
    cy.get("a[type=submit]").click();
    cy.wait(1000);
  });
});

Cypress.Commands.add("randomVehicleDelete", () => {
  cy.get("a.btn.btn-small.btn-info.vehiclebtnbig")
    .its("length")
    .then((count) => {
      let randomIndex = 0;
      randomIndex = Cypress._.random(count - 1);

      cy.get("a.btn.btn-small.btn-info.vehiclebtnbig").eq(randomIndex).click();
    });
});
