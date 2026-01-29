Feature: Login

  @regression
  Scenario: Valid login
    Given the user is on the login page
    When I enter the username "standard_user" and password "secret_sauce"
    Then I should see the welcome message

  Scenario: Invalid login
    Given the user is on the login page
    When I enter the username "standard_user" and password "secret_sauce"
    Then I should see the welcome message

  Scenario: Invalid login fails
    Given the user is on the login page
    When I enter the username "standard_user" and password "secret_sauce"
    Then I should see an error