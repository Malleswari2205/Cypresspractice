import login from "../PageObject/login";
describe("test suite",()=>{
    it("Register",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

       const lgn= new login();
       lgn.setusername("Admin");
       lgn.setpassword("admin123")
       lgn.clicksubmit();







        // cy.get('.ico-register').click();
        // //cy.get(':nth-child(3) > .forcheckbox').check('F')
        // cy.get('#FirstName').type("annem")
        // cy.get('#LastName').type("malli")
        // cy.get('#Email').type("Cypress@gmail.com")
        // cy.get('#Password').type('123456')
        // cy.get('#ConfirmPassword').type('123456')
        // cy.get('#register-button').click();

    })
})