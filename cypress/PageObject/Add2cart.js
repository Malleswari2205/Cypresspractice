class Add2Cart{
    Shoppingcart(){
        cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .button-2').click();
    }
    addProduct(){
        cy.get('.ico-cart > .cart-label').click();
    }
    Terms(){
        cy.get('#termsofservice').check()
    }
    checkout(){
        cy.get('#checkout').click()
       // cy.get('.checkout-as-guest-button').click()
    }


}
export default Add2Cart;