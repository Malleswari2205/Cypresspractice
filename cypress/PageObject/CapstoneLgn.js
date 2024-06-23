class login{

    setEmail(email){
        cy.get('#Email').type(email)

    }
    setPwd(pwd){
        cy.get('#Password').type(pwd)

    }
    setCLick(){
        cy.get('form > .buttons > .button-1').click();
    }
}
export default login;