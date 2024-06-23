///<reference types="cypress"/>
describe("test suite",()=>{
    it("Register",()=>{
        cy.visit("https://demowebshop.tricentis.com/")
        cy.get('.ico-register').click();
        //cy.get(':nth-child(3) > .forcheckbox').check('F')
        cy.get('#FirstName').type("annem")
        cy.get('#LastName').type("malli")
        cy.get('#Email').type("Cypress@gmail.com")
        cy.get('#Password').type('123456')
        cy.get('#ConfirmPassword').type('123456')
        cy.get('#register-button').click();

    })
    it("login",()=>{
        cy.visit("https://demowebshop.tricentis.com/")
        cy.get('.ico-login').click()
        cy.get('#Email').type("Cypress22@gmail.com")
        cy.get('#Password').type('123456')
        cy.get('form > .buttons > .button-1').click()

    })
    it.only("select the product",()=>{
        cy.visit("https://demowebshop.tricentis.com/")
        cy.get('.list > :nth-child(3) > a').click()
        cy.get(':nth-child(2) > .sub-category-item > .title > a').click();
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get('.ico-cart > .cart-label').click()
        cy.get('#termsofservice').check({force:true})
        cy.get('#checkout').click()
        cy.get('.checkout-as-guest-button').click()

    })
    it("shopping cart",()=>{

        cy.visit("https://demowebshop.tricentis.com/")
    })
})