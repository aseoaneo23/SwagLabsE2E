Feature: Login de usuarios en swag labs

Como usuario 
Quiero acceder a la página de swag labs
Para poder ver los artículos de la página principal

Background: 
    Given un usuario en la página de Login

Scenario Outline: el login se completa correctamente
    When el usuario completa el formulario de login con usuario: "<usuario>" y contraseña: "<contraseña>"
    Then el usuario es redirigido a la página de inicio

Examples: 

| usuario                 | contraseña   |
| standard_user           | secret_sauce |
| problem_user            | secret_sauce |
| performance_glitch_user             | secret_sauce |

Scenario Outline: el login falla debido a los credenciales
    When el usuario completa el formulario de login con usuario: "<usuario>" y contraseña: "<contraseña>"
    Then la página muestra un error: "<error>"

Examples: 

| usuario       | contraseña   | error                                                                     |
| user          | secret_sauce | Epic sadface: Username and password do not match any user in this service |
| standard_user |              | Epic sadface: Password is required                                        |
|               | secret_sauce | Epic sadface: Username is required                                        |