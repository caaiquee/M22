/// <reference types="cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get('[href="/Tab/Account"] > .r-g6644c').click()
    }
}