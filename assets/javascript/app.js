//var queryUrl = https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=4420039662874f99bc6701b660b6b576

$(document).ready(function() {

    



$("#searchb").on("click", function(event) {
    event.preventDefault();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + articles + startYear + endYear 

var startYear = $("startyear").val();
var endYear = $("endyear").val();
var apiKey = "4420039662874f99bc6701b660b6b576";
var articles = $("searchterm").val();
var articleNumbers = $("searchnumber").val();

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#movie-view").text(JSON.stringify(response));
  });

//
//
});
});
