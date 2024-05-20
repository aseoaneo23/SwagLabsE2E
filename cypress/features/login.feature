Feature: User Login on Swag Labs
  As a user
  I want to access the Swag Labs page
  So that I can view the items on the main page

  Background:
    Given a user on the Login page

  Scenario Outline: login completes successfully
    When the user fills in the login form with username: "<username>" and password: "<password>"
    Then the user is redirected to the home page

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

  Scenario Outline: login fails due to credentials
    When the user fills in the login form with username: "<username>" and password: "<password>"
    Then the page shows an error: "<error>"

    Examples:
      | username      | password     | error                                                                     |
      | user          | secret_sauce | Epic sadface: Username and password do not match any user in this service |
      | standard_user |              | Epic sadface: Password is required                                        |
      |               | secret_sauce | Epic sadface: Username is required                                        |
