class resetPage {

    elements = {
        inputEmailText: () => cy.get('input[type="email"]'),
        resetPasswordButton: () => cy.get('button[type="submit"]'),
        emailErrorMsg: () => cy.get('rx-alert[type="danger"] div'), 
    }

    

    inputEmail(email) {
        this.elements.inputEmailText().type(email);
    }

    resetPasswordButtonClick() {
        this.elements.resetPasswordButton().click();
    }

    getEmailErrorMsg() {
        this.elements.emailErrorMsg().should('to.contain', 'Email address does not exist')
    }
    
}    

module.exports = new resetPage();