
/// <reference types="cypress"/>



describe("test suite",()=>{

    it("test case1",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangehrm").then((data)=>{

       
        cy.get('input[placeholder="Username"]').type(data.Username)
        cy.get('input[placeholder="Password"]').type(data.Password)
        cy.get('button[type="submit"]').click()
       cy.get('.oxd-topbar-header-breadcrumb')
          .should('have.text',data.expected)

        })
          // .should('have.text',"Dashboard")
    })
})