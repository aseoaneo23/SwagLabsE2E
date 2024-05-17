import Login from '../../pages/login_page'

Given('un usuario en la página de Login', () => {
    Login.visitSwagLabs()
})

When('el usuario completa el formulario de login con usuario: {string} y contraseña: {string}', (usuario,contraseña) => {
    Login.completeCredentials(usuario,contraseña)
})

Then('el usuario es redirigido a la página de inicio', () => {
    Login.checkRedirection()
})

Then('la página muestra un error: {string}', () => {

})