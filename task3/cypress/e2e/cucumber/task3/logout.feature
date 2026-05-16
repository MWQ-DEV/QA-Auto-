Feature: Logout Functionality

  Scenario: User logout successfully
    Given user is logged in
    When user opens menu
    And clicks logout
    Then user should return to login page