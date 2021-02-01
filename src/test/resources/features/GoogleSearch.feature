Feature: Google Search
@wip
  Scenario: Search CoreView and navigate to next page
    Given The user is on the www.google.com
    And The user searches for "CoreView"
    And The user scrolls to bottom of the page and clicks next
    When The user clicks the second result and waits 5 seconds
