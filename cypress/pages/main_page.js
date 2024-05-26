import { main_page_constants } from "../constants"
import Login from './login_page'

class MainPage {
    
    elements = {
        getUrl : () => cy.url(),
        getBurguerBtn : () => cy.get(main_page_constants.BURGUER_BTN),
        getLogoutLink : () => cy.get(main_page_constants.LOGOUT_LINK),
    }

    //Replace id on constant to click on specific button
    buildProductButton = productId => {
        console.log(productId)
       return main_page_constants.PRODUCT_DETAILS_BTN.replace('idp', productId)
    }
    //Replace  id on url parameters
    buildUrlOfProductDetail = productId => {
        return main_page_constants.PRODUCT_DETAILS_URL.replace('num', productId)
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

    checkRedirection = url => {
        this.elements.getUrl().should('eq', url)
    }

    selectAProduct = productId => {
        const button = cy.get(this.buildProductButton(productId))
        button.click()
    }

    
}

module.exports = new MainPage()