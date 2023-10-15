//

var searchQuery = document.querySelector("#search");
var searchButton = document.querySelector("#searchBtn");
var addButtons = document.querySelectorAll("#addToListBtn");
var searchData = localStorage.getItem("searchinfo");
var listSelect = document.querySelectorAll("#listSelect");
var resultsBox = document.querySelector("#results")


//const herokuAPI = "https://ravishing-reads-a2209ea97ad8.herokuapp.com/";
const herokuAPI = "http://localhost:3001/";

console.log(searchData);

console.log(addButtons);

searchButton.addEventListener("click", function checking(event) {
  event.preventDefault();
  searchTerm = searchQuery.value;
  console.log(searchTerm);
  var searchAPI = herokuAPI + "search/" + searchTerm;
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

  // location.replace(searchAPI)
});

//addButtons.addEventListener("click", function bookadd(event) {
//event.preventDefault();
//  var x =2
//});

function accessResults() {
  var searchData = localStorage.getItem(("search"));
  console.log(JSON.parse(searchData));
  return
}

accessResults();


function addToList (event) {
  event.preventDefault()

  var searchData = localStorage.getItem(("search"));
  console.log(JSON.parse(searchData));
  // Convert the `data-count` attribute from a string to an integer.
  let bookBtn = event.target
  let index = parseInt(event.target.getAttribute('datacount'));
  console.log(listSelect[index])

  // Check to see if the element is a button.
  if (event.target.matches('button')) {
    listSelect[index].classlist.remove("hidden")
    fetch()
    
    // Set the newly incremented `count` variable to the `data-count` attribute.
    event.target.setAttribute('data-count', count);

    // Update what the button's display to show the correct amount of clicks.
    event.target.textContent = `Clicks: ${count}`;
  }

};

resultsBox.addEventListener('click', addToList)

//addButtons addtoList (event) {
 // for(let i=0; i < addButtons.length; i++) {
  //  addButtons[i].addEventListener("click", function (){

 //   })

 /// }
//})

