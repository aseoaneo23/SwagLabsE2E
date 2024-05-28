Feature: Checkout process

  As a user
  I want to complete the purchase process
  So that I can successfully buy products

  Background:
    Given the user is logged in
    And the user has products in the cart

  Scenario Outline: fill out checkout information correctly
    Given a user that proceeds to checkout
    When the user fill the form with valid first name: "<fname>", last name: "<lname>" and zip code: "<zcode>"
    Then the user should see a overview page

    Examples: 

    | fname  | lname    | zcode |
    | Carlos | Ramírez  | 90210 |
    | María  | González | 10001 |

  Scenario Outline: fill out checkout information with invalid information
    Given a user that proceeds to checkout
    When the user enters invalid first name: "<fname>", last name: "<lname>" and/or zip code: "<zcode>"
    Then the page shows an "<error>"

    Examples:

    | fname  | lname    | zcode | error                          |
    |        | Ramírez  | 90210 | Error: First Name is required  |
    | María  |          | 10001 | Error: Last Name is required   |
    | fname  | lname    |       | Error: Postal Code is required |



  Scenario: complete the purchase
    Given the user is on the checkout page
    When the user confirms the order
    Then the user should see an order confirmation message
