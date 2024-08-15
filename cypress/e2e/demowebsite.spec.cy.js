import lgndetails from '../fixtures/logindetails.json'
describe("sample",()=>{
    it("website",()=>{
        cy.visit("https://www.saucedemo.com/")
       // cy.fixture("logindetails.json")
        cy.get("#user-name").type(lgndetails.username);
    })
})