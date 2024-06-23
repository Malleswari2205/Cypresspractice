import login from "../PageObject/CapstoneLgn"
describe("Login",()=>{

    it("Login",()=>{
        cy.visit("https://demowebshop.tricentis.com");
        
        cy.get('.ico-login').click()
        const lgn= new login;
        lgn.setEmail("Cypress9900@gmail.com");
        lgn.setPwd("123456")
        lgn.setCLick();
       
    })

})
