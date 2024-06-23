import Registration from "../PageObject/CapstoneReg";

describe("Demowebshop",()=>{

    it("Register",()=>{
        cy.visit("https://demowebshop.tricentis.com");
        cy.get('.ico-register').click();
         const reg=new Registration();


        reg.setfirstname("aaaa")
        reg.setLastname("xxx");
        reg.setEmail("asasa@gmail.com")
        reg.setPassword("123456")
        reg.setConfirmpassword("123456")
        reg.setClick();
        //    cy.fixture("capstone").then((data)=>{
        //     cy.get('#FirstName').type(data.FirstName);
           
        // cy.get('#LastName').type(data.LastName)
        //    cy.get('#Email').type(data.Email)
        //    cy.get('#Password').type(data.Password)
        //   cy.get('#ConfirmPassword').type(data.Confirmpassword)
        //   cy.get('#register-button').click()
        //    cy.get('.result').should('have.value','Your registration completed')
   
   
       })

    })
//})