Feature: Testing the AquaBotTesting Page Features

  Scenario: Validating Home Page of AquaBotTesting Page
    Given Home Page of AquaBotTesting Page
    When I click on Home Button
    Then I should be in the landing Page of "Automated Testing"

  Scenario: Validating Buttons&Links Page of AquaBotTesting Page
    Then I should see the Text as "Buttons & Links"
    When I click on Button & links menu
    Then I see the Text as "Types of Buttons"
    When I click change Text Button
    When I click on pop up button
    When I click on Alert button
    When I click on open new Window
    Then I should navigate and see text as "You opened a new window."
    When I click the close button
    Then I should navigate to landing Page and see the text as "Types of Links"
    When I click on the links to a section
    When I click the link to external section
    When I click the link to open new window section
    Then I navigate to another window and see the text as "You opened a new window."
    When I click on go back button

  Scenario: Validating Forms Page of AquaBotTesting Page
    When I click on forms button
    Then I should see the form text as "Demo Contact Form"
    When I fill The Form and Click on Submit

  Scenario: Validating Tables Page of AquaBotTesting Page
    When I hover the mouse and validate the table1 example
    Then I can see the Text as "Working With Tables"
    When I click on table 2 Example
    Then I see the header Text of table 2 as "Working With Tables"

  Scenario: Validating DropDown Page of AquaBotTesting Page
    When I click on the dropDown
    Then I should navigate and see the Text as "Drop Downs"
    When I can validate all the items in the page
    When I click on the Reset All button to reset the page content