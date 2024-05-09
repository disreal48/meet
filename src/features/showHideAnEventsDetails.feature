Feature: Show/Hide Event Details
 Scenario: An event element is collapsed by default
  Given the main page is open
  When the user sees the list of all upcoming events
  Then the user should see that each event element is collapsed by default

 Scenario: User can expand an event to see its details
  Given the main page is open
  When the user clicks on an event element
  Then the user should see the event element expanded to show its details

 Scenario: User can collapse an event to hide its details
  Given the main page is open and the details of an item are shown
  When the user clicks on the hide details button
  Then the user should see the event element collapsed to hide its details