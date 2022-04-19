//Retrieve from storage
var prefs = JSON.parse(localStorage.getItem("prefs")) || [];


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
