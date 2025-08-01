Feature: Sauce Website Full Purchase Flow

  Scenario Outline: Login, add product to cart, and complete checkout with dummy credentials
    Given I open the login page
    When I enter username "<username>" and password "<password>"
    Then I should be on the inventory page
    When I click the "Add to Cart" button
    Then the product should appear in the cart
    When I proceed to checkout
    And I enter my shipping details
    And I confirm the order
    Then the order should be placed successfully

  Examples:
    | username        | password      |
    # | dummy_user1     | test_pass1    |
    # | dummy_user2     | 123456        |
    # | test_user_xyz   | abc@123       |
    | standard_user   | secret_sauce  |
