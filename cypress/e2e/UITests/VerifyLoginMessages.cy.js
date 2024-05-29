import loginPage  from "../pages/loginPage";

describe('Verify login validation messages', () => {
  it('Check validation messages for username and password', () => {
    cy.visit('https://qa.roomex.com/')
    loginPage.loginButtonClick();
    loginPage.getUsernameErrorMsg();
    loginPage.getPasswordErrorMsg();
  })
})
