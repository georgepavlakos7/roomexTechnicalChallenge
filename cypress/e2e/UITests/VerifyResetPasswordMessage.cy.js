import resetPage  from "../pages/resetPage";

describe('Verify reset password message', () => {
  it('Check validation message for not found email', () => {
    cy.visit('https://qa.roomex.com/forgot-password')
    resetPage.inputEmail('bob@roomex.com')
    resetPage.resetPasswordButtonClick();
    resetPage.getEmailErrorMsg();
  })
})
