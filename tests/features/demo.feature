Feature: Sauce Website Full Purchase Flow

  Scenario: Login, add product to cart, and complete checkout
    Given I open the login page
    When I enter username "standard_user" and password "secret_sauce"
    Then I should be on the inventory page
    When I click the "Add to Cart" button
    Then the product should appear in the cart
    When I proceed to checkout
    And I enter my shipping details
    And I confirm the order
    Then the order should be placed successfully
