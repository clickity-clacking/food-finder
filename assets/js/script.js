//variables


// User input Street Number and name
// User input City
// User input State
// User input Postal Code
// User Submit input
// JS retrieve input values on submit
// JS concatenate input
// JS split concatenated input
// JS store retrieved val as string array
// JS string array vals in fetch url
// Fetch data based on retrieved vals
// 
var addrInputHandler = function (){
    var streetVal = '400 north louise street'; //document.getElementById('street-input').value;
    var streetArray = streetVal.split(' ')
    console.log(streetArray);
    var streetString = streetArray.join('+')
    console.log(streetString);
    var cityString = 'glendale'; //document.getElementById('city-input').value
    console.log(cityString);
    var stateString = 'CA'; //document.getElementById('state-input').value
    console.log(stateString);
    var zipString = '91206'; //document.getElementById('zip-input').value
    console.log(zipString);

    var geoUrl = "https://nominatim.openstreetmap.org/search.php?street=" + streetString + "&city=" + cityString + "&state=" + stateString + "&postalcode=" + zipString + "&format=jsonv2&limit=1";
    return geoUrl
}

var fetchLatLon = function(lat, lon){
  var geoUrl = addrInputHandler(); 
  fetch(geoUrl).then(function(response){
    if (response.ok) {
      response.json().then(function(data){
        console.log(data[0].lat);
        console.log(data[0].lon);
      })
    }
    else {
      console.log('selection invalid')
    }
  })
};

fetchLatLon();
//open to main page containing food selector generator that can function right away
    //function retrieve data from storage if present

    //event listener for button press to provide food option

        //if food option clicked

            //function display restaurant info
        
        //else 

            //remove first suggestion from restaurant list 

            //reset so they can press button again and get new food option
//

//an option from the main page takes you to a survey where you can fill out food prefs

    //check list where you can select multiple items to select cuisine types

    //check list where you can select multiple items to select price bracket

    //more preference options to be added based on readily available yelp/food review site API attributes

    //submit button

        //filter base restaurant array to match criteria from form

        //store in local storage