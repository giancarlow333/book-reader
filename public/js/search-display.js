//

var searchTerm = document.querySelectorAll("#search");
var addButtons = document.querySelectorAll("#addToListBtn");
var searchData = localStorage.getItem('searchinfo');

const herokuAPI = "https://ravishing-reads-a2209ea97ad8.herokuapp.com/"

console.log(searchData)
//var titleAll = document.querySelectorAll("#title");
//var ISBNall = document.querySelectorAll("#ISBN");
//var authorAll = document.querySelectorAll("#author");
//var pubDateAll = document.querySelectorAll("#pubDate").innertext;
//var pageCountAll = document.querySelectorAll("#pageCount");
//var descriptionAll = document.querySelectorAll("#description");
//var thumbnailAll = document.querySelectorAll("#thumbnail").src;

addButtons.addEventListener("click", function checking(event) {
  event.preventDefault();

var searchAPI = herokuAPI + "search/" + searchTerm
 fetch(searchAPI)
.then(function (response) {
  return response.json();
})
.then(function (data) {

})
})


resultName.innerHTML = storedSearches[index].location;
//setting current weather
currentSrc = data.list[0].weather[0].icon;
currentIcon.src = "https://openweathermap.org/img/wn/" + currentSrc + "@2x.png";
currentTemp.innerHTML = "Temperature: " + data.list[0].main.temp + "º F";
currentHumidity.innerHTML = "Humidity: " + data.list[0].main.humidity + "%";
currentWind.innerHTML = "Wind Speed: " + data.list[0].wind.speed + "mph";
//setting up 5-day forecast
let j = 7;
resultDate.forEach((date) => {
  GMTDate = data.list[j].dt_txt;
  date.innerHTML = dayjs(GMTDate).format("MMM D");
  j = j + 8;
  console.log(j);
});
let k = 7;
resultIcon.forEach((image) => {
  var icon = data.list[k].weather[0].icon;
  //source javascript image.src code: https://softauthor.com/javascript-working-with-images/
  image.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  k = k + 8;
});
let l = 7;
resultTemp.forEach((temp) => {
  temp.innerHTML = "Temp: " + data.list[l].main.temp + "º F";
  l = l + 8;
});
let m = 7;
resultHumidity.forEach((humidity) => {
  humidity.innerHTML = "Humidity: " + data.list[m].main.humidity + "%";
  m = m + 8;
});
let o = 7;
resultWind.forEach((wind) => {
  wind.innerHTML = "Wind Speed: " + data.list[o].wind.speed + "mph";
  o = o + 8;
});

addButtons.forEach((button) => button.addEventListener("click", saveDOMall));
