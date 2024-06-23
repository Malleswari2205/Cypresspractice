class Registration{

   setfirstname(Firstname){
    cy.get('#FirstName').type(Firstname);
   }
   setLastname(LastName){
    cy.get('#LastName').type(LastName)
   }
   setEmail(Email){
    cy.get('#Email').type(Email)
   }
   setPassword(Password){
    cy.get('#Password').type(Password)
   }
   setConfirmpassword(Confirmpassword){
    cy.get('#ConfirmPassword').type(Confirmpassword)
   }
   setClick(){
    cy.get('#register-button').click()
   }
}
export default Registration;