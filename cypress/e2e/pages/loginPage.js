class loginPage {

    elements = {
        loginButton: () => cy.get('button[type="submit"]'),
        usernameErrorMsg: () => cy.get('[formcontrolname="username"] [class="ng-star-inserted"]'), 
        passwordErrorMsg: () => cy.get('[formcontrolname="password"] [class="ng-star-inserted"]'),
    }

    loginButtonClick() {
        this.elements.loginButton().click();
    }

    getUsernameErrorMsg() {
        this.elements.usernameErrorMsg().should('to.contain', 'Email is required')
    }

    getPasswordErrorMsg() {
        this.elements.passwordErrorMsg().should('to.contain', 'Password is required')
    }
    
}    

module.exports = new loginPage();