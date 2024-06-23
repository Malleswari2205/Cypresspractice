import userEvent from "@testing-library/user-event"
import login from "../PageObject/CapstoneLgn"


describe("Queries",()=>{
    it("as",async()=>{
            cy.visit("https://demowebshop.tricentis.com/")
            cy.get('.ico-register').fin
            cy.get('#FirstName').as("fname")
              cy.get('@fname') .type("annem");
              cy.get('#LastName').then((ele)=>{
                    const val=ele.text().to.equal("mmm")                

              })
          
              
            
          })
          it("userevents",()=>{
            cy.visit("https://demowebshop.tricentis.com/register")
           cy.get("div").children('.page-body').contains("First name:")
           cy.get('#FirstName').next()
           cy.get("div").closest('.page-title')

    })
    it.only("userevents",()=>{
        cy.visit("https://demowebshop.tricentis.com/register")
      // cy.window().document();
      cy.get("div").filter('.page-body')
})
})