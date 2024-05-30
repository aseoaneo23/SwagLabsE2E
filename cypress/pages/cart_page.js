import { cart_constants } from "../constants"

class CartPage {

    elements = {
        getCartItem: () => cy.get(cart_constants.CART_ITEM),
        getContinueToCheckoutBtn: () => cy.get(cart_constants.CONTINUE_TO_CHECKOUT)
    }

    checkProductsOfTheCart = () => this.elements.getCartItem().should('exist')

    continueToCheckout = () => this.elements.getContinueToCheckoutBtn().click()

}

module.exports = new CartPage()