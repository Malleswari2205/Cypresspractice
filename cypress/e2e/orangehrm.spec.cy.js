/// <reference types="cypress"/>
describe("test suite",()=>{

    it("test case1",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
        cy.title().should('eq','OrangeHRM')
    })
})