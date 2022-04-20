//variables
const addrSubmitBtn = document.getElementById('addr-submit');
const foodEl = document.getElementById('cuisine')
var foodSel = foodEl.options[foodEl.selectedIndex].value
const priceEl = document.getElementById('price')
var priceSel = priceEl.options[priceEl.selectedIndex].value
var imgArr = []
// JS retrieve input values on submit


//Retrieve from storage
var prefs = JSON.parse(localStorage.getItem("prefs")) || [];

// Fetch data based on retrieved vals
var formHandler = function (){
    // User input Street Number and name
    var streetVal = '400 north louise street'; //document.getElementById('street-input').value;
    // JS store retrieved val as string array
    var streetArr = streetVal.split(' ')
    // join array strings with '+' symbol
    var streetString = streetArr.join('+')
    // get User input City
    var cityVal = 'glendale'; //document.getElementById('city-input').value
    var cityArr = cityVal.split(' ')
    var cityString = cityArr.join('+')
    // get User input State
    var stateString = 'CA'; //document.getElementById('state-input').value
    var zipString = '91206'; //document.getElementById('zip-input').value

    var geoUrl = "https://nominatim.openstreetmap.org/search.php?street=" + streetString + "&city=" + cityString + "&state=" + stateString + "&postalcode=" + zipString + "&format=jsonv2&limit=1";
    // Fetch data based on retrieved vals
    fetch(geoUrl).then(function(response){
      if (response.ok) {
        response.json().then(function(geoData){
          console.log(geoData)
        })
      }
      else {
        console.log('selection invalid')
      }
    })
};

 
foodEl.onchange = function() {
  foodSel = foodEl.options[foodEl.selectedIndex].value;
  console.log(foodSel);
  getFood(foodSel)
};

priceEl.onchange = function() {
  priceSel = priceEl.options[priceEl.selectedIndex].value;
  console.log(priceSel);
  return priceSel;
};


var getFood = function(food){
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
  console.log(imgArr)
}

var setFood = function () {
  const resultsEl = document.querySelectorAll('.comments');           
  for (var i = 0; i < resultsEl.length; i++) {
    let imageContainer = document.createElement ('img');
    imageContainer.setAttribute('src', imgArr[i]);
    imageContainer.setAttribute('class', 'food-img');
    imageContainer.setAttribute('height', '100px')
    let textEl = document.createElement('span')
    textEl.setAttribute('class', 'result-text')
    textEl.textContent = priceSel
    resultsEl[i].appendChild(imageContainer);
    resultsEl[i].appendChild(textEl);
  }
}




addrSubmitBtn.addEventListener('click', () => setFood());


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




//Function: generate and display recs
var displayRecs = function(){
    var recs = [];
    //populate recs

    //display recs on page
    $(".bg-blue").each(function(index){
        $(this).append("<h3 class='rec'>TEST</h3>")
        $(".rec").last().val(recs[i])
    });
};

//Function: save to storage
var savePrefs = function(prefs){
    localStorage.setItem("prefs", JSON.stringify(prefs));
};