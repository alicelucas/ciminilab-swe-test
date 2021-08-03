# ciminilab-swe-test
## Task: Make an interactive recipe card


In this homework, you will build on MUI’s demo of a recipe card available in their documentation: 
https://material-ui.com/components/cards/#complex-interaction


Once this project is cloned, dependencies are installed (`yarn install`), and the app is started (`yarn start`), you will see the following content:
![Alt text](public/preview.png?raw=true "Title")


This simple card lacks functionality. The objective of this homework is to make the card more interactive. 

What you should do:
- Change the menu button (the three vertical dots next to the title) to correspond to an edit icon. 
- When clicking on the newly added edit icon button, the user should be provided with the following options:
    - An “Upload image” option to upload a new image from the user’s desktop. The new image will replace the current image. Note that currently no image is displayed.
    - An “Edit content” option which allows the user to change the title of the card and the descriptive text of the recipe card. The date shown under the title should be changed to correspond to today’s date. 
    - A “Export recipe” option which, when clicked, downloads a .json file on the user's local machine. The json file should contain the following data: (1) the title of the card, (2) the date, (3) the image data URI, (4) and the descriptive content.  
- Hovering on the "Like" button should make the icon temporarily red instead of gray.
- A count should be kept on how many times the "Like" button has been clicked. The count should be displayed near to the heart icon.
- The card should be centered on the screen horizontally. Vertical padding may be added. 



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

