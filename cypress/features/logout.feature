Feature: user logout on Swag Labs

As a user
I want to logout from Swag Labs

Background: 
    Given a logged in user

Scenario: log out completes successfully
    When the user proceeds to log out
    Then the user is redirected to login page