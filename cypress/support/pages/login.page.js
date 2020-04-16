export let LoginPage = {
    UserName: () =>cy.get('#user-name'),
    Password: () => cy.get('#password'),
    LoginButton: () => cy.get('.login-box .btn_action'),
    ErrorMessage: () => cy.get('[data-test="error"]'),
  };
  