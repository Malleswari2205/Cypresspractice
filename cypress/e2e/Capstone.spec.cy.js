describe("capstone",()=>{
    beforeEach(()=>{
        cy.visit("https://demowebshop.tricentis.com");
    })

    

it("Register",()=>{
   
     cy.fixture("capstone").then((data)=>{
        cy.get('#FirstName').type(data.FirstName);
        cy.get('#LastName').type(data.LastName)
        cy.get('#Email').type(data.Email)
        cy.get('#Password').type(data.Password)
        cy.get('#ConfirmPassword').type(data.Confirmpassword)
        cy.get('#register-button').click()
        cy.get('.result').should('have.value','Your registration completed')


    })
    

    })
    it.only("login",()=>{
        cy.visit("https://demowebshop.tricentis.com");
        cy.get('.ico-login').click()
        cy.fixture("capstone").then((data)=>{
        cy.get('#Email').type(data.Email)
        cy.get('#Password').type(data.Password)
        cy.get('form > .buttons > .button-1').click();
        cy.get('.header-links > ul > :nth-child(1) > .account').contains('Cypress9900@gmail.com')

        })
        

})

})