Feature: add and remove products from cart 

As a user 
I want to add or remove some products in my cart 
So that I should be able to see the changes on the cart 

Background: 
    Given a logged-in user 

Scenario: add products to cart 
    When the user adds some products to cart
    Then the user should be able to see those products in the cart 
    
Scenario: remove products from cart
    Given a user with some products on cart
    When the user removes some products from the cart
    Then the user should not see those products on the cart
