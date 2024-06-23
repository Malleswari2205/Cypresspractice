describe("test suite",()=>{

    it("Alerts",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert',(alt)=>{

            expect(alt).to.contains('I am a JS Alert');
            //once alerts window opened cypress automatically close the alert
           
            })
            cy.get("#result").should('have.text','You successfully clicked an alert');
        })
        it("Alerts confirmation",()=>{

            cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
            cy.get(':nth-child(2) > button').click()
            cy.on('window:confirm',(alt)=>{
    
                expect(alt).to.contains('I am a JS Confirm');
                //once alerts window opened cypress automatically close the alert
                
                })
                cy.get("#result").should('have.text','You clicked: Ok');
            })
            it("Alerts confirmation cancel button",()=>{

                cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
                cy.get(':nth-child(2) > button').click()
                cy.on('window:confirm',()=>false);
        
                    cy.get("#result").should('have.text','You clicked: Cancel');
                })
            it("enter text on prompt",()=>{

                    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
                    cy.window().then((x)=>{
                        cy.stub(x,'prompt').returns('welcome x');

                    })
                    cy.get(':nth-child(3) > button').click();
                    cy.get("#result").should('have.text','You entered: welcome x');
                     
                   
                    })
            it.only("cancel prompt",()=>{

                        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
                       
                        cy.get(':nth-child(3) > button').click();
                          cy.on('window:prompt',()=>false);
                          cy.get("#result").should('have.text','You entered: null')
                       
                        })

    })
