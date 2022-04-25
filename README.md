# Food-Finder

This site will guide a user to their perfect spot to eat based on preferences gathered in an on-site survey and location

The app can be found at the following URL https://clickity-clacking.github.io/food-finder/

## Application contributors

 - Feba Alex (Foundation and custom CSS, HTML framework)
 - Erik Dell (Javascript, API retrieval, API research, User/DOM interactions)
 - Marissa Martinez (Javascript, Local Storage)

## Application intention and current state

### Intention

The Applications intention is to return pageinated recommendations for the user based on preference inputs. 
The information is fetched from the Yelp API based on the Geocoded location of the user. 
The returned results are sorted by distance to return results that are more local to the user. 
This functionality is hard coded in to the Javascript until more secure storage of API keys can be applied.

### Current

The application takes the user input and returns a random food image and the rest of the users input and pushes it to document container elements. 

## Images to show current state of functionality

Take the quiz button opens modal for user input

<img src=assets\Images\ExampleLandingPage.png width="500px">

Modal retrieves user inpu

<img src=assets\Images\ExampleModal.png  width="500px">

On Submit Data is pushed to document containers

<img src=assets\Images\ExamplePush.png width="500px">


