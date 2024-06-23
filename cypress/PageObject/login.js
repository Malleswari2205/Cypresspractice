class login{
    setusername(username){

        cy.get('input[placeholder="Username"]').type(username)
    }
    setpassword(Password){
        cy.get('input[placeholder="Password"]').type(Password)
    }
    clicksubmit(){
        cy.get('button[type="submit"]').click()
    }
}
export default login;