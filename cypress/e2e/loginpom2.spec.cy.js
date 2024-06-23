
import Login2 from "../PageObject/login"



describe("test suite",()=>{
    it("Register",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture("orangehrm").then((data)=>{

        
       const lgn= new Login2();
       lgn.setusername("Admin");
       lgn.setpassword("admin123")
       lgn.clicksubmit();
        })

    })
})