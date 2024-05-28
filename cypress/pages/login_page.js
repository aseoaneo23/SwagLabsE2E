import { login_constants } from "../constants"

class LoginPage {
    elements = {
        getUrl : () => cy.url(),
        getUsernameInput : () => cy.get(login_constants.USERNAME_INPUT),
        getPasswordInput : () => cy.get(login_constants.PASSWORD_INPUT),
        getSubmitButton : () => cy.get(login_constants.SUBMIT_BTN),
        getErrorMessage : () => cy.get(login_constants.ERROR_ELEMENT)
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

    checkRedirection = () => this.elements.getUrl().should('eq', login_constants.INVENTORY_URL)

    checkErrorMessage = (error) => this.elements.getErrorMessage().should('have.text', error)

    //Function to speed up the process of login. It suposed to be used on other features where login process is not very important 
    completeValidCredentials = () => {
        this.elements.getUsernameInput().clear().type(login_constants.VALID_USERNAME)
        this.elements.getPasswordInput().clear().type(login_constants.VALID_PASSWORD)
        this.elements.getSubmitButton().click()
    }
}

module.exports = new LoginPage()