
export const main_page_constants = {
    USER : 'standard_user',
    PASS : 'secret_sauce',
    BURGUER_BTN : '#react-burger-menu-btn',
    LOGOUT_LINK : '#logout_sidebar_link',
    LOGIN_URL : 'https://www.saucedemo.com/',
    PRODUCT_DETAILS_BTN : '[data-test="item-idp-title-link"]',
    PRODUCT_DETAILS_URL : 'https://www.saucedemo.com/inventory-item.html?id=num',
    ADD_TO_CART_BTN : '[data-test="add-to-cart-sauce-labs-item"]',
    AVAILABLE_PRODUCTS : ["backpack","bike-light","bolt-t-shirt","fleece-jacket","onesie"]
}

export const cart_constants = {
    CART_BTN : '[data-test="shopping-cart-link"]',
    CART_URL : 'https://www.saucedemo.com/cart.html',
    CART_LIST : '[data-test="cart-list"]',
    REMOVE_FROM_CART_BTN : '[data-test="remove-sauce-labs-item"]',
    CONTINUE_TO_CHECKOUT : '[data-test="checkout"]',
    CART_ITEM : '[data-test="inventory-item"]'

}

export const login_constants = {
    USERNAME_INPUT : '#user-name',
    PASSWORD_INPUT : '#password',
    VALID_USERNAME : 'standard_user',
    VALID_PASSWORD : 'secret_sauce',
    SUBMIT_BTN : '#login-button',
    INVENTORY_URL : 'https://www.saucedemo.com/inventory.html',
    ERROR_ELEMENT : '[data-test="error"]',
}

export const checkout_constants = {
    ERROR_CONTAINER : '[data-test="error"]',
    FIRST_NAME_INPUT : '[data-test="firstName"]',
    LAST_NAME_INPUT : '[data-test="lastName"]',
    ZIPCODE_INPUT : '[data-test="postalCode"]',
    CONTINUE_BTN : '[data-test="continue"]',
    CHECKOUT_URL : 'https://www.saucedemo.com/checkout-step-one.html',
    OVERVIEW_URL : 'https://www.saucedemo.com/checkout-step-two.html',
}

export const overview_constants = {
    FINISH_ORDER_BTN : '[data-test="finish"]',
    ORDER_DONE_MSG : 'Thank you for your order!'
}
