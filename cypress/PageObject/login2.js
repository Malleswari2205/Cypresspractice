class Login2{

    txtusername='input[placeholder="Username"]'
    txtpassword='input[placeholder="Password"'
    clickbutton='button[type="submit"]'
    setuname(uname){
        cy.get(this.txtusername).type(uname)
    }
    setpwd(pwd){
        cy.get(this.txtpassword).type(pwd)
    }
    clickbutton(btn){
        cy.get(this.clickbutton).type(btn)
    }
}