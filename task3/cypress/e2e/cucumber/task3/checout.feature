Feature: Checkout Process

  Scenario: Add product and checkout
    Given user logged in successfully
    When user adds a product to cart
    And user opens cart
    And user clicks checkout
    And user enters checkout information
    Then checkout overview page should appear