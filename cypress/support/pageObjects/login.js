class Login {
  //mis elementos obtenidos de login
  get = {
    userNameInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    submitInput: () => cy.get("input[type=submit]"),
  };

  //acciones de cypress
  enterUsername(type) {
    this.get.userNameInput().type(type);
  }
  enterPassword(type) {
    this.get.passwordInput().type(type);
  }
  clickSubmit() {
    this.get.submitInput().click();
  }
}

export const login = new Login();
