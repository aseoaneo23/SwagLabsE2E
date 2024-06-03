import MainPage from '../../pages/main_page'
import * as constants  from '../../constants'

Given('a user on main page', () => {
    MainPage.enterToMainPage()
})

When('the user clicks in product: {string}', productId => {
    MainPage.selectAProduct(productId)
})

Then('the user is redirected to details of product: {string}', productId => {
    MainPage.checkRedirection(MainPage.buildUrlOfProductDetail(productId))
})
