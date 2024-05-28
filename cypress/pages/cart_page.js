

checkProductsInCart = (option) => {
    //this.elements.getCartBtn().click()
    //this.elements.getUrl().should('eq', cart_constants.CART_URL)
    this.elements.selectedProducts.forEach( product => {
        if (option === "existent") {
            cy.get(product.replace('add-to-cart','remove')).should('be.visible')
        } else {
            cy.get(product).should('exist')
        }
        
    })
}