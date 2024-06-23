/// <reference types="cypress"/>
describe("suite",()=>{

    it("case1",()=>{
     cy.visit("https://www.saucedemo.com/")
     cy.get('input[name="user-name"]').type('visual_user')
     cy.get('input[name="password"]').type('secret_sauce')
     cy.get('input[value="Login"]').should('have.value','Login').click()




    })
})