/// <reference types = "cypress"/>

class LoginPage{
    get #email() { return cy.get('[data-testid="email"]')}
    get #password() { return cy.get('[data-testid="password"]')}
    get #btnLogin() { return cy.get('[data-testid="btnLogin"]')}

    login(email, password){
        this.#email.type(email)
        this.#password.type(password)
        this.#btnLogin.click()
    }

    loginMap(){
        return cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    }
}

module.exports = new LoginPage();