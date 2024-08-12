/// <reference types = "cypress" />

class ProfilePage{
    get #btnLogout() { return cy.get('.r-14lw9ot > :nth-child(5)').click()} 
    get #btnYes() { return cy.get('[data-testid="confirm"]').click()}

    logOut(){
        this.#btnLogout.click()
        this.#btnYes.click()        
    }
}

module.exports = new ProfilePage();