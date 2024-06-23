import login from "../PageObject/CapstoneLgn"
import Add2Cart from "../PageObject/Add2cart"
//import Add2Cart from "../PageObject/Add2cart";


describe("Add 2 cart",()=>{

    it("add to cart",()=>{
        cy.visit("https://demowebshop.tricentis.com/");
        cy.get('.ico-login').click()
       const lgn= new login();
       lgn.setEmail("Cypress9900@gmail.com");
        lgn.setPwd("123456")
        lgn.setCLick();
        
        //cy.get('.content').contains('The product has been added to your shopping cart')
        const cart=new Add2Cart();
       cart.Shoppingcart();
       cart. addProduct();
       cart. Terms();
       cart.checkout();

    })
})