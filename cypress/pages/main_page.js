import { main_page_constants } from "../constants"
import Login from './login_page'

class MainPage {
    
    elements = {
        getUrl : () => cy.url(),
        getBurguerBtn : () => cy.get(main_page_constants.BURGUER_BTN),
        getLogoutLink : () => cy.get(main_page_constants.LOGOUT_LINK)
        
    }

    enterToMainPage = () => {
        Login.visitSwagLabs()
        Login.completeCredentials(main_page_constants.USER,main_page_constants.PASS)
        Login.checkRedirection()
    }

    proceedToLogout = () => {
        this.elements.getBurguerBtn().click()
        this.elements.getLogoutLink().click()
    }

    checkRedirection = () => {
        this.elements.getUrl().should('eq', main_page_constants.LOGIN_URL)
    }

}

module.exports = new MainPage()