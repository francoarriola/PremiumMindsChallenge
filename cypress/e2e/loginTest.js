describe("login", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.url().should("contain", "login");
  });

  it("The login was succesful", () => {
    cy.loginSuccess();
  });
  it("The login was not succesful", () => {
    cy.loginFail();
  });
});
