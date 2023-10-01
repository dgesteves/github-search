# Github Search Interface for React Developer Position

## Exercise Instructions:

You are tasked with building a Github search interface using React and TypeScript. The interface
should allow users to search for repositories on Github and mark them as favorites. The favorites list
should be maintained in memory while the user is on the app.

## Requirements:

1. Use either GraphQL (preferred) or REST API to query Github for repositories based on the
   user's search input.
2. Display the search results as the user types in the search field, possibly with debounce
   functionality to avoid excessive API calls.
3. Each search result item should have a button to set it as a favorite. If an item is already set as
   a favorite, it should be rendered as a favorite again.
4. Implement a navigation feature to allow users to access the list of favorites.
5. In the favorites list, each item should have a rating evaluation feature, from 1 to 5 , allowing
   users to rate their favorite repositories.
6. Users should also be able to remove items from the favorites list.

## Bonus:

Incorporate Material UI to enhance the user interface. You can use any components from Material UI
that you find suitable for this project.

## Evaluation:

Your evaluation will be based on the following criteria:

1. Correct implementation of the required features.
2. Proper state management and component architecture.
3. Use of TypeScript for fully typed code.
4. Adherence to best practices in React development.
5. Effective use of GraphQL or REST API for querying Github.
6. Proper implementation of the favorites list and its features.
7. Use of Material UI for enhanced UI components.
   Please provide clear instructions about how to install and run the application. Feel free to ask any
   questions if you need further clarification on the exercise. Good luck!

## Resources:

- Github GraphQL API: https://docs.github.com/en/graphql/overview/about-the-graphql-api
- Material UI: https://mui.com/

# Instructions

## Only had 8 hours during the weekend to work on this, so I didn't get to implement everything I wanted to (e.g. E2e tests, more unit tests, better error handling, etc.)

- Create a Github Personal Access Token and add it to the .env file
- Run `npm install`
- Run `npm start`
