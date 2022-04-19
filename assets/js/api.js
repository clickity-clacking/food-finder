const yelpKey = "";
let myHeaders = new Headers();
myHeaders.append("Access-Control-Allow-Origin", "*");

var yelpAPI="https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston"

// fetch(yelpAPI, {
//   headers: myHeaders 
// }).then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// });


const geoKey = "";
var geoUrl = "https://nominatim.openstreetmap.org/search?q=400+north+louise+street,+glendale&addressdetails=1&limit=10&extratags=1";


fetch(geoUrl, {headers: myHeaders})
.then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
});


