import Login from '../../pages/login_page'

Given('a user on the Login page', () => {
    Login.visitSwagLabs()
})

When('the user fills in the login form with username: {string} and password: {string}', (usuario,contraseña) => {
    Login.completeCredentials(usuario,contraseña)
})

Then('the user is redirected to the home page', () => {
    Login.checkRedirection()
})

Then('the page shows an error: {string}', error => {
    Login.checkErrorMessage(error)
})