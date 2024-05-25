import MainPage from '../../pages/main_page'


Given('a logged in user', () => {
    MainPage.enterToMainPage()
})

When('the user proceeds to log out', () => {
    MainPage.proceedToLogout()
})

Then('the user is redirected to login page', () => {
    MainPage.checkRedirection()
})
