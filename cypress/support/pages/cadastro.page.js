/// <reference types = "cypress" />

class CadastroPage{
    get #lbFirstName() {return cy.get('[data-testid="firstName"]')}
    get #lbLastName() {return cy.get('[data-testid="lastName"]')}
    get #lbPhone() {return cy.get('[data-testid="phone"]')}
    get #lbEmail() {return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')}
    get #lbPassword() {return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')}
    get #lbRePassword() {return cy.get('[data-testid="repassword"]')}
    get #btnCreate() {return cy.get('[data-testid="create"]')}

    cadastro(firstName, lastName, phone, email, pwd, repwd){
        this.#lbFirstName.type(firstName)
        this.#lbLastName.type(lastName)
        this.#lbPhone.type(phone)
        this.#lbEmail.type(email)
        this.#lbPassword.type(pwd)
        this.#lbRePassword.type(repwd)
        this.#btnCreate.click()
    }
}

module.exports = new CadastroPage();