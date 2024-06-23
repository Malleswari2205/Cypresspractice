describe("Assertions",()=>{
    it("implicit",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should('include','orangehrmlive.com')
                .should('not.eq','orange') //negative assertion
                .and('contain','.orangehrm')
        cy.title().should('eq','OrangeHRM')

    })
    it.only("explicit",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture("orangehrm").then((data)=>{

       
            cy.get('input[placeholder="Username"]').type(data.Username)
            cy.get('input[placeholder="Password"]').type(data.Password)
            //BDD style
            cy.get('button[type="submit"]').click()
            let expectval="manda user";
        cy.get(".oxd-userdropdown-name").then((val)=>{
            const name=val.text();
            expect(expectval).to.equal(name)

            //TDD
            assert.equal(name,expectval)

        })
        })

    })

})