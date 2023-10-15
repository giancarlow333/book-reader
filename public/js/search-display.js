//

var searchQuery = document.querySelector("#search");
var searchButton = document.querySelector("#searchBtn");
var addButtons = document.querySelectorAll("#addToListBtn");
var searchData = localStorage.getItem("searchinfo");

//const herokuAPI = "https://ravishing-reads-a2209ea97ad8.herokuapp.com/search/";
const herokuAPI = "http://localhost:3001/search/";

console.log(searchData);
//var titleAll = document.querySelectorAll("#title");
//var ISBNall = document.querySelectorAll("#ISBN");
//var authorAll = document.querySelectorAll("#author");
//var pubDateAll = document.querySelectorAll("#pubDate").innertext;
//var pageCountAll = document.querySelectorAll("#pageCount");
//var descriptionAll = document.querySelectorAll("#description");
//var thumbnailAll = document.querySelectorAll("#thumbnail").src;

searchButton.addEventListener("click", function checking(event) {
  event.preventDefault();
  searchTerm = searchQuery.value;
  console.log(searchTerm);
  var searchAPI = herokuAPI + searchTerm;
  var searchAPIJSON = searchAPI + "/json"
  console.log(searchAPI);
  fetch(searchAPIJSON)
    .then(function (response) {
    //  localStorage.setItem(("searchB", response));
     // console.log(response);
      return response.json();
    })
    .then(function (data) {
      localStorage.setItem("search", JSON.stringify(data));
      console.log(data);
      return data
    });
//localStorage.setItem(("search.json", response.json));

   location.replace(searchAPI)
});

//addButtons.addEventListener("click", function bookadd(event) {
//event.preventDefault();
//  var x =2
//});

function accessResults() {
 //var searchData = localStorage.getItem(JSON.parse("search"));
 // var searchDataB = localStorage.getItem(("searchB"));
  var searchData = localStorage.getItem(("search"));
 // var searchDataJSON = localStorage.getItem(("search.json"));
 // var searchDatabody = localStorage.getItem(("search.body"));
  console.log((searchData));
  console.log(JSON.parse(searchData));
 // console.log(JSON.stringify(searchDatabody));
 // console.log(JSON.stringify(searchDataJSON));
}

accessResults();
