import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

///<reference types="cypress"/>
describe("Mouse ACtions",()=>{
    it("Mouse over",()=>{
    
    cy.visit("https://demowebshop.tricentis.com/");
    //cy.get("cy.get(':nth-child(4) > .nav-link-hed')").trigger('mouseover').click();
    cy.get('.top-menu > :nth-child(3) > [href="/electronics"]').trigger('mouseover').click();


})
it('Right click',()=>{
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    cy.get('.context-menu-one').rightclick();
    cy.get('.context-menu-icon-edit > span').should('be.visible')
})
it('double click',()=>{

    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick");
    cy.frameLoaded('#iframeResult')
    cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick');
})
//install plugin drag and drop
it('drag and drop',()=>{

    cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
    cy.get("#box3").drag("#box106")

})
it.only("scroll the page",()=>{
    cy.visit("https://www.worldometers.info/geography/flags-of-the-world/");
    cy.get(':nth-child(79) > [align="center"] > a > img').scrollIntoView({duration:2000});
    cy.get(':nth-child(79) > [align="center"] > a > img').should("be.visible");
    cy.get('.row > :nth-child(31)').scrollIntoView({duration:3000});
    cy.get('.row > :nth-child(31)').should("be.visible")
    //till footer
    cy.get('.footerlinks').scrollIntoView();
    cy.get('.footerlinks').should("be.visible")
})
})