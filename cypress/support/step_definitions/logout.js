import MainPage from '../../pages/main_page'
import * as constants  from '../../constants'

Given('a logged in user', () => {
    MainPage.enterToMainPage()
})

When('the user proceeds to log out', () => {
    MainPage.proceedToLogout()
})

Then('the user is redirected to login page', () => {
    MainPage.checkRedirection(constants.main_page_constants.LOGIN_URL)
})
