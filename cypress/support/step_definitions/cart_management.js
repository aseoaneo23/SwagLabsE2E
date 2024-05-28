import Login from '../../pages/login_page'
import MainPage from '../../pages/main_page'

Given('a logged-in user', (usuario,contraseña) => {
    Login.visitSwagLabs()
    Login.completeValidCredentials()
    Login.checkRedirection()
})

Given('a user with some products on cart', () => {
    MainPage.addProductsToCart()
})

When('the user adds some products to cart', () => {
    MainPage.addProductsToCart()
})

When('the user removes some products from the cart', () => {
    MainPage.removeProductsFromCart()
})

Then('the user should be able to see those products in the cart', () => {
    MainPage.checkProductsInCart("existent")
})

Then('the user should not see those products on the cart', () => {
    MainPage.checkProductsInCart("nonexistent")
})