Feature: Login

  @regresion
  Scenario: Login válido
    Given que el usuario está en la página de login
    When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    Then debo ver el mensaje de bienvenida

    Scenario: Login invalido
    Given que el usuario está en la página de login
    When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    Then debo ver el mensaje de bienvenida