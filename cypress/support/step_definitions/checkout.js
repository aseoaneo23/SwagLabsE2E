import Login from '../../pages/login_page'
import MainPage from '../../pages/main_page'
import CheckoutPage from '../../pages/checkout_page'

Given('the user is logged in', (usuario,contraseña) => {
    Login.visitSwagLabs()
    Login.completeValidCredentials()
    Login.checkRedirection()
})

Given('the user has products in the cart', () => {
    MainPage.addProductsToCart()
    CheckoutPage.navigateToCart()
    CheckoutPage.checkProductsOfTheCart()
})

Given('a user that proceeds to checkout', () => {
    CheckoutPage.continueToCheckout()
})

Given('the user is on the checkout page', () => {
    CheckoutPage.checkOnChekoutPage()
})


When('the user fill the form with valid first name: {string}, last name: {string} and zip code: {string}', (fname,lname,zcode) => {
    CheckoutPage.completeInformation(fname,lname,zcode)
})

When('the user enters invalid first name: {string}, last name: {string} and/or zip code: {string}', (fname,lname,zcode) => {
    CheckoutPage.completeInformation(fname,lname,zcode)
})

When('the user confirms the order', () => {
    CheckoutPage.confirmOrder()
})

Then('the user should see a overview page', () => {
    CheckoutPage.checkRedirectToOverview()
})

Then('the page shows an {string}', (error) => {
    CheckoutPage.checkErrorMessage(error)
})

Then('the user should see an order confirmation message', () => {
    CheckoutPage.checkOrderFinishedMessage()
})