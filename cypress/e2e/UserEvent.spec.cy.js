import '@testing-library/cypress'
describe("ts",()=>{
    
    
    it("testing",()=>{
        cy.visit("https://demowebshop.tricentis.com");
        cy.get('.ico-register').click();
        cy.findByLabelText("First name:").type("aaaa")

    })
  

})
  
  