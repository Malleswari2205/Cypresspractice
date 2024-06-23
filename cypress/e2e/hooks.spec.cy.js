///<reference types="cypress"/>
describe("test suites",()=>{
    before(()=>{

        cy.log("login")
    })
    after(()=>{

        cy.log("logout")
    })
    beforeEach(()=>{
        cy.log("before each block")

    })
    afterEach(()=>{

        cy.log("After each block i will execute")

    })
    it.skip("search",()=>{

        cy.log("search")
    })
    it("Advance search",()=>{

    cy.log("advance search");
    })
    it.only("final",()=>{

        cy.log("final");
      
    })
    
})