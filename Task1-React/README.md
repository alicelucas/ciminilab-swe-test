In this repo, you will build on MUI’s example of a recipe card available in their documentation: 
https://material-ui.com/components/cards/#complex-interaction


This app has been created using Create-React-App. Install dependencies with `yarn install`. Start the app with `yarn start`. 
You should then see the following content in your browser:

![Alt text](public/preview.png?raw=true "Title")

This simple recipe card lacks functionality: none of the buttons work. In this project, 
we will implement the functionality of the "Upload image," "Download content," and "Like" buttons. 

What you should do:
- Fix the "Upload image" button:
     - When clicked, the user should be able to upload an image from their local machine. 
The uploaded image will replace the current image shown in the Recipe card. Note that on first load, no image is displayed.
     - Furthermore, the date displayed in the card header must update to today's date when a new image is uploaded.
- Fix the "Download content" button. When the button is clicked, a .json file should be downloaded on the user's machine which contains 
the following data: (1) the title of the recipe, (2) the date shown on the card and (3) the descriptive content of the recipe.
- Fix the "Like" button:
     - Hovering over the "Like" button should make the icon temporarily red instead of gray.
     - A count should be kept on how many times the "Like" button has been clicked. 
     The current count should be displayed near to the heart icon.
- Finally, make sure that the recipe card is centered in the screen as opposed to being in the upper left corner.

Note that this exercise should take no more than 60 minutes. 
If you get stuck on one of the functionalities, please still send your solution back to us!

Please write your solution in Typescript. You should return to us all of the source code for running the project.