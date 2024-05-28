import { main_page_constants, cart_constants } from "../constants"
import Login from './login_page'

class MainPage {

    elements = {
        getUrl: () => cy.url(),
        getBurguerBtn: () => cy.get(main_page_constants.BURGUER_BTN),
        getLogoutLink: () => cy.get(main_page_constants.LOGOUT_LINK),
        getAddToCartBtn: () => cy.get(main_page_constants.ADD_TO_CART_BTN),
        selectedProducts: [],
        removedProducts: [],
        getCartBtn: () => cy.get(cart_constants.CART_BTN),
        getCartElements: () => cy.get(cart_constants.CART_LIST),
    }

    //Replace id on constant to click on specific button
    buildProductButton = productId => {
        return main_page_constants.PRODUCT_DETAILS_BTN.replace('idp', productId)
    }
    //Replace id on url parameters
    buildUrlOfProductDetail = productId => {
        return main_page_constants.PRODUCT_DETAILS_URL.replace('num', productId)
    }

    enterToMainPage = () => {
        Login.visitSwagLabs()
        Login.completeCredentials(main_page_constants.USER, main_page_constants.PASS)
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

    //This function generates a add to cart button random selector
    buildAddToCartButton = () => {
        const productArray = main_page_constants.AVAILABLE_PRODUCTS
        const randomIndex = Math.floor(Math.random() * productArray.length)
        const selectedProduct = productArray[randomIndex]

        return main_page_constants.ADD_TO_CART_BTN.replace('item', selectedProduct)
    }

    //This function generates a remove from cart button random selector
    buildRemoveFromCartButton = () => {
        const productArray = this.elements.selectedProducts
        const randomIndex = Math.floor(Math.random() * productArray.length)
        const selectedProduct = productArray[randomIndex]

        return selectedProduct.replace('add-to-cart', 'remove')
    }

    //This function generates 2 product selectors and clicks on them, then cleans the array and appends the selected products to it
    addProductsToCart = () => {
        const firstProduct = this.buildAddToCartButton()
        let secondProduct

        do {
            secondProduct = this.buildAddToCartButton()
        } while (secondProduct === firstProduct)
        console.log(firstProduct, secondProduct)

        cy.get(firstProduct).click()
        cy.get(secondProduct).click()

        this.elements.selectedProducts = []
        this.elements.selectedProducts.push(firstProduct, secondProduct)
    }

    //This function generates 1 product selector and clicks on them, then cleans the array and appends the removed products to it
    removeProductsFromCart = () => {
        const toRemoveProduct = this.buildRemoveFromCartButton()
        cy.get(toRemoveProduct).click()

        this.elements.removedProducts = []
        this.elements.removedProducts.push(toRemoveProduct)
    }

    // This function checks if the selected products exists in the cart. It replaces "add to cart" buttons with "remove" buttons, as adding these products changes their identifier.
    // Also receives a parameter to be reutilized 

    checkProductsInCart = (option) => {
        if (option === "existent") {
            this.elements.selectedProducts.forEach(product => {
                cy.get(product.replace('add-to-cart', 'remove')).should('be.visible')
            })
        } else {
            this.elements.removedProducts.forEach(product => {
                cy.get(product.replace('remove', 'add-to-cart')).should('exist')
            })

        }

    }
}

module.exports = new MainPage()