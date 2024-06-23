/// <reference types="cypress"/>
describe("browswer nav",()=>{

    it("test case1",()=>{
    cy.visit("https://www.opencart.com/")
    cy.title().should('eq',"OpenCart - Open Source Shopping Cart Solution");
    //cy.get('.btn btn-link navbar-btn').click();
    cy.go('back')
    cy.go('forward')
    cy.reload()

    })
})