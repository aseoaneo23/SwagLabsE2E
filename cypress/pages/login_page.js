import { constantes_login } from "../constants"

class LoginPage {
    elements = {
        getUrl : () => cy.url(),
        getUsernameInput : () => cy.get(constantes_login.USERNAME_INPUT),
        getPasswordInput : () => cy.get(constantes_login.PASSWORD_INPUT),
        getSubmitButton : () => cy.get(constantes_login.SUBMIT_BTN),
        getErrorMessage : () => cy.get(constantes_login.ERROR_ELEMENT)
    }

    visitSwagLabs = () => cy.visit('/')

    completeCredentials = (username,password) => {
        if(username === ""){
            this.elements.getPasswordInput().clear().type(password)
        }else if(password === ""){
            this.elements.getUsernameInput().clear().type(username)
        } else{
            this.elements.getUsernameInput().clear().type(username)
            this.elements.getPasswordInput().clear().type(password)
        }
        
        this.elements.getSubmitButton().click()
    }

    checkRedirection = () => this.elements.getUrl().should('eq', constantes_login.INVENTORY_URL)

    checkErrorMessage = () => this.elements.getErrorMessage().should('eq', error)
}

module.exports = new LoginPage()