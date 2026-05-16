Feature: Login Functionality

  Scenario: Login with standard user
    Given user opens login page
    When user enters username "standard_user"
    And user enters password "secret_sauce"
    And clicks login button
    Then user should navigate to products page

  Scenario: Login with locked user
    Given user opens login page
    When user enters username "locked_out_user"
    And user enters password "secret_sauce"
    And clicks login button
    Then error message should appear