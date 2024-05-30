import { cart_constants, checkout_constants, overview_constants } from "../constants"

class CheckoutPage {

    elements = {
        getUrl: () => cy.url(),
        getCartBtn: () => cy.get(cart_constants.CART_BTN),
        getFNameInput: () => cy.get(checkout_constants.FIRST_NAME_INPUT),
        getLNameInput: () => cy.get(checkout_constants.LAST_NAME_INPUT),
        getZCodeInput: () => cy.get(checkout_constants.ZIPCODE_INPUT),
        getContinueBtn: () => cy.get(checkout_constants.CONTINUE_BTN),
        getErrorContainer: () => cy.get(checkout_constants.ERROR_CONTAINER),
        getFinishOrderBtn: () => cy.get(overview_constants.FINISH_ORDER_BTN)
    }

    navigateToCart = () => this.elements.getCartBtn().click()

    checkOnCheckoutPage = () => this.elements.getUrl().should('eq', checkout_constants.CHECKOUT_URL)

    //This function manages the behavior of examples
    completeInformation = (fname, lname, zcode) => {
        if (fname === "") {
            this.elements.getLNameInput().clear().type(lname)
            this.elements.getZCodeInput().clear().type(zcode)
        } else if (lname === "") {
            this.elements.getFNameInput().clear().type(fname)
            this.elements.getZCodeInput().clear().type(zcode)
        } else if (zcode === "") {
            this.elements.getFNameInput().clear().type(fname)
            this.elements.getLNameInput().clear().type(lname)
        } else {
            this.elements.getFNameInput().clear().type(fname)
            this.elements.getLNameInput().clear().type(lname)
            this.elements.getZCodeInput().clear().type(zcode)
        }

        this.elements.getContinueBtn().click()
    }

    //Function to speed up the fill out task (only for scenarios where this step is useless)
    completeValidInformation = () => {
        this.elements.getFNameInput().clear().type(checkout_constants.FNAME_EXAMPLE)
        this.elements.getLNameInput().clear().type(checkout_constants.LNAME_EXAMPLE)
        this.elements.getZCodeInput().clear().type(checkout_constants.ZCODE_EXAMPLE)
    }

    continueToOverview = () => this.elements.getContinueBtn().click()

    checkRedirectToOverview = () => this.elements.getUrl().should('eq', checkout_constants.OVERVIEW_URL)

    checkErrorMessage = error => this.elements.getErrorContainer().should('have.text', error)

    confirmOrder = () => this.elements.getFinishOrderBtn().click()

    checkOrderFinishedMessage = () => cy.contains(overview_constants.ORDER_DONE_MSG)
}

module.exports = new CheckoutPage()