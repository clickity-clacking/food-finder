const addrSubmitBtn = document.getElementById('addr-submit');



var imgArr = [];


// start yelp data set to memory
var yelpData = function (preferences) {
    var yelpUrl = "https://api.yelp.com/v3/businesses/search?latitude=" + preferences.lat + "&longitude=" + preferences.lon + "&price=" + preferences.price + "&categories=" + preferences.cuisine + "&radius=" + preferences.distance + "&opennow=true&sort_by=distance&limit=10";
    let myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    fetch(yelpUrl, {headers:myHeaders}).then(function(response){
      if (response.ok) {
        response.json().then(function(yelpData){
          console.log(yelpData)
        })
      }
      else {
        console.log('selection invalid')
      }
    })
}

// Fetch data based on retrieved vals
var formHandler = function (){
    // get user input Street Number and name
    var streetVal = document.getElementById('street-input').value;
    var streetArr = streetVal.split(' ');
    var streetString = streetArr.join('+');
    console.log(streetString);
    // get User input City
    var cityVal = document.getElementById('city-input').value;
    var cityArr = cityVal.split(' ');
    var cityString = cityArr.join('+');
    // get User input State
    var stateVal = document.getElementById('state-input').value;
    var stateArr = stateVal.split(' ');
    var stateString = stateArr.join('+');
    console.log(stateString);
    // get user input zip
    var zipString = document.getElementById('zip-input').value;
    console.log(zipString);
    // food type selection
    const foodEl = document.getElementById('cuisine');
    var foodSel = foodEl.options[foodEl.selectedIndex].value;
    console.log(foodSel);
    // price selection
    const priceEl = document.getElementById('price');
    var priceSel = priceEl.options[priceEl.selectedIndex].value;
    // distance selection
    const distanceEl = document.getElementById('distance');
    var distanceSel = distanceEl.options[distanceEl.selectedIndex].value;
    console.log (priceSel)
    console.log (distanceSel)
    var geoUrl = "https://nominatim.openstreetmap.org/search.php?street=" + streetString + "&city=" + cityString + "&state=" + stateString + "&postalcode=" + zipString + "&format=jsonv2&limit=1";
    // Fetch data based on retrieved vals
    fetch(geoUrl).then(function(response){
      if (response.ok) {
        response.json().then(function(geoData){
          var preferences = {
            lat: geoData.lat,
            lon: geoData.lon,
            price: priceSel,
            cuisine: foodSel,
            distance: distanceSel,
          }
          yelpData(preferences);
        })
      }
      else {
        console.log('selection invalid')
      }
    })
};

 var setYelpData = function(results) {

 }


// start temp image push
var getTempFoodImages = function(food){
  let foodURL = 'https://foodish-api.herokuapp.com/api/images/' + food
  for (var i = 0; i < 3; i++) {
    fetch(foodURL).then(function(response){
      if (response.ok) {
        response.json().then(function(img){
          imgArr.push(img.image);
        })
      }
      else {
        console.log('selection invalid');
      }
    })
  }
}


const foodEl = document.getElementById('cuisine');
let foodSel = foodEl.options[foodEl.selectedIndex].value;
foodEl.onchange = function () {
  foodSel = foodEl.options[foodEl.selectedIndex].value;
  getTempFoodImages(foodSel)
  return foodSel
}

var setTempResults = function (event) {
  event.preventDefault();
  event.stopPropagation();
  const priceEl = document.getElementById('price');
  let priceSel = priceEl.options[priceEl.selectedIndex].text;
  let ratingSel = document.getElementById('rating').value;
  console.log(ratingSel);
  parseInt(ratingSel);
  console.log(ratingSel);
  const distanceEl = document.getElementById('distance');
  var distanceSel = distanceEl.options[distanceEl.selectedIndex].text;
  const resultsEl = document.querySelectorAll('.comments');
           
  for (var i = 0; i < resultsEl.length; i++) {
    let imageContainer = document.createElement ('img');
    imageContainer.setAttribute('src', imgArr[i]);
    imageContainer.setAttribute('class', 'food-img');
    imageContainer.setAttribute('height', '100px')
    let textEl = document.createElement('span')
    textEl.setAttribute('class', 'result-text')
    textEl.textContent = foodSel + " " + priceSel + " within" +  distanceSel;
    let ratingContainer = document.createElement('div')
    let ratingEl = document.createElement('img')
    
    if (ratingSel == 1) {
      ratingEl.setAttribute('src', './assets/images/regular_1.png')
      ratingEl.classList.add('rating-result')
    }
    else if (ratingSel == 15) {
      ratingEl.setAttribute('src', './assets/images/regular_1_half.png')
      ratingEl.classList.add('rating-result')
    }
    else if (ratingSel == 2) {
      ratingEl.setAttribute('src', './assets/images/regular_2.png')
      ratingEl.classList.add('rating-result')
    }
    else if (ratingSel == 25) {
      ratingEl.setAttribute('src', './assets/images/regular_2_half.png')
      ratingEl.classList.add('rating-result')
    }
    else if (ratingSel == 3) {
      ratingEl.setAttribute('src', './assets/images/regular_3.png')
      ratingEl.classList.add('rating-result')
    }
    else if (ratingSel == 35) {
      ratingEl.setAttribute('src', './assets/images/regular_3_half.png')
      ratingEl.classList.add('rating-result')
    }
    else if (ratingSel == 4) {
      ratingEl.setAttribute('src', './assets/images/regular_4.png')
      ratingEl.classList.add('rating-result')
    }
    else if (ratingSel == 45) {
      ratingEl.setAttribute('src', './assets/images/regular_4_half.png')
      ratingEl.classList.add('rating-result')
    }
    else if (ratingSel == 5) {
      ratingEl.setAttribute('src', './assets/images/regular_5.png')
      ratingEl.classList.add('rating-result')
    }
    ratingContainer.appendChild(ratingEl)
    resultsEl[i].appendChild(imageContainer);
    resultsEl[i].appendChild(textEl);
    resultsEl[i].appendChild(ratingContainer);

  }
  var modalState = document.getElementById('quizModal');
  modalState.setAttribute('aria-hidden', 'true');
  modalState.setAttribute('style', 'display: none; top: 87px;');
  var overlayState = document.querySelector('.reveal-overlay');
  overlayState.setAttribute('style', 'display: none;');
  var html = document.querySelector('html');
  html.setAttribute('class', '');
  
}



// event listener for form submission
addrSubmitBtn.addEventListener('click',  setTempResults);

// Rating stars functionality
jQuery(document).ready(function($) {

  $('.rating_stars span.r').hover(function() {
              // get hovered value
              var rating = $(this).data('rating');
              var value = $(this).data('value');
              $(this).parent().attr('class', '').addClass('rating_stars').addClass('rating_'+rating);
              highlight_star(value);
          }, function() {
              // get hidden field value
              var rating = $("#rating").val();
              var value = $("#rating_val").val();
              $(this).parent().attr('class', '').addClass('rating_stars').addClass('rating_'+rating);
              highlight_star(value);
          }).click(function() {
              // Set hidden field value
              var value = $(this).data('value');
              $("#rating_val").val(value);
  
              var rating = $(this).data('rating');
              $("#rating").val(rating);
              
              highlight_star(value);
          });
          
          var highlight_star = function(rating) {
              $('.rating_stars span.s').each(function() {
                  var low = $(this).data('low');
                  var high = $(this).data('high');
                  $(this).removeClass('active-high').removeClass('active-low');
                  if (rating >= high) $(this).addClass('active-high');
                  else if (rating == low) $(this).addClass('active-low');
              });
          }
  });