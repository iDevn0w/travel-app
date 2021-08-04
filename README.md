# travel-app
this is the capstone project for udaciy front-end nanodgree program, in this project i build a travel app that take two parameter inside the hypertext form the travel destination and date and based on the given the webapp return an image of the place you travel two, weather tempreture and description based on the date.

## API
three API's usesed:
* geonamesAPI
* two weatherbit api (current,forcast)

## usage
*download the **travel app** project form the repo and follow below:*
1. install **node/npm**
2. install **webpack**
3. initializate and install all package i'm used vai **npm i**
3. prapare the project for production vai webpack building tools command **npm run buildP**
4. fire the express server that running on PORT 3000 via **npm run start** or **npm start**
5. i use simple test tool with jest just to defined the function and code in app.js and server fire it with **npm run jest**
## NOTE
**for extend the project i add simple removetrip button that fired on eventlistener after you get all potential information

## stratgy
*geonames[0].lat, geonames[0].lon >> date conditions >> weatherbit forcast (for future trip), weatherbit current (for current trip).*
