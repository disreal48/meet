# MeetApp

MeetApp is a serverless Progressive Web App that allows you to find events in a specified city. It is designed to work offline and can be added to your home screen for easy access.

## Features

- Serverless architecture
- Progressive Web App functionality
- Offline support
- Event search by city
- Customizable number of displayed events
- Interactive charts for event information

## Feature 1: Filter Events By City

As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.

### Scenario 1

When user hasn’t searched for a specific city, show upcoming events from all cities.

Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see a list of upcoming events.

### Scenario 2

User should see a list of suggestions when they search for a city.

Given the main page is open;
When user starts typing in the city textbox;
Then the user should receive a list of cities (suggestions) that match what they’ve typed.

### Scenario 3

User can select a city from the suggested list.

Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Feature 2: Show/Hide Event Details

As a user, I want to be able to show or hide event details so that I can choose whether to see more information about an event or not.

### Scenario 1

Given the main page is open;
When the user sees the list of all upcoming events;
Then the user should see that each event element is collapsed by default;

### Scenario 2

Given the user is viewing a list of upcoming events;
When the user clicks on an event;
Then the event details should be displayed.

### Scenario 3

Given the user is viewing a list of upcoming events with event details displayed;
When the user clicks on the same event again;
Then the event details should be hidden.

## Feature 3: Specify Number of Events

As a user, I want to be able to specify the number of events to be displayed so that I can control the amount of information shown at once.

### Scenario 1

Given the user is viewing a list of upcoming events;
When the user selects a number from a dropdown menu;
Then the list of events should be updated to display the specified number of events.

## Feature 4: Use the App When Offline

As a user, I want to be able to use the app even when I am offline so that I can access event information without an internet connection.

### Scenario 1

Given the user has previously loaded the app and viewed a list of upcoming events;
When the user loses internet connection;
Then the user should still be able to view the previously loaded list of events.

## Feature 5: Add an App Shortcut to the Home Screen

As a user, I want to be able to add a shortcut to the app on my home screen so that I can easily access the app without going through a browser.

### Scenario 1

Given the user is using a mobile device;
When the user visits the app in a browser;
Then the user should be prompted to add a shortcut to the home screen.

## Feature 6: Display Charts Visualizing Event Details

As a user, I want to see interactive charts that visualize event details so that I can quickly understand and analyze event information.

### Scenario 1

Given the user is viewing the details of an event;
When the user scrolls down to the charts section;
Then the interactive charts should be displayed.

## Getting Started

To get started with MeetApp, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/meet.git`
2. Install the dependencies: `npm install`
3. Configure the app: Update the necessary settings in `config.js`
4. Start the app: `npm start`

## Contributing

Contributions are welcome! If you have any ideas or improvements, please submit a pull request.

## License

This project is licensed under the MIT License.
