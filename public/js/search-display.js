//

var searchQuery = document.querySelector("#search");
var searchButton = document.querySelector("#searchBtn");
var addButtons = document.querySelectorAll("#addToListBtn");
var searchData = localStorage.getItem("searchinfo");

//const herokuAPI = "https://ravishing-reads-a2209ea97ad8.herokuapp.com/";
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
  location.replace(searchAPI)
  console.log(searchAPI);
  fetch(searchAPIJSON)
    .then(function (response) {
      localStorage.setItem("search", response);
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      localStorage.setItem("search", data);
      console.log(data);
    });
});

//addButtons.addEventListener("click", function bookadd(event) {
//event.preventDefault();
//  var x =2
//});

function accessResults() {
  searchData = localStorage.getItem("search");
  console.log(searchData);
}

accessResults();
