///<reference types="cypress"/>
describe("suite",()=>
{
    it("test case1",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').click()
    })
})