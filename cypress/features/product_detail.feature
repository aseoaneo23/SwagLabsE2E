Feature: product detail on main page

As a user
I want to click in a product
So that must be able to see the details

Scenario Outline: the user see specific details of a product
    Given a user on main page
    When the user clicks in product: "<productId>"
    Then the user is redirected to details of product: "<productId>" 

Examples:

| productId |
|     0     |
|     3     |
|     1     |