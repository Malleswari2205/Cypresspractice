describe("test suite",()=>{
    it("screenshot",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.screenshot("orangehrm")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-').type("aaa").screenshot("uname")


    })

})