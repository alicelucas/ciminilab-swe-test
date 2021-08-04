# ciminilab-swe-test
## Task 1: Make an interactive recipe card with React


In this project, you will build on MUI’s demo of a recipe card available in their documentation: 
https://material-ui.com/components/cards/#complex-interaction


First navigate to "Task1-React" folder, then install dependencies with `yarn install`. Start the app with `yarn start`. 
You will see the following content:

![Alt text](public/preview.png?raw=true "Title")

This simple card lacks functionality. In this work, we will make the "Upload image," "Download content," and "Like" button functional. 

What you should do:
- Fix the "Upload image" button. When clicked, the user should be able to upload an image from their local machine. 
The uploaded image will replace the current image shown in the Recipe card. Note that on first load, no image is displayed.
**Furthermore, the date displayed in the card header must update to today's date when a new image is uploaded**.
- Fix the "Download content" button. When clicked, a .json file should be downloaded on the user's machine which contains 
the following data: (1) the title of the recipe, (2) the date shown on the card and (3) the descriptive content of the recipe.
- Fix the "Like" button:
     - Hovering on the "Like" button should make the icon temporarily red instead of gray.
     - A count should be kept on how many times the "Like" button has been clicked. 
     The current count should be displayed near to the heart icon as a badge.
- Finally, make sure that the recipe card is centered in the screen as opposed to being in the upper left corner.


Please write your solution in Typescript.

This exercise should take approximately 60 minutes to complete. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:
### `yarn install`

Install dependencies for the project. 


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
