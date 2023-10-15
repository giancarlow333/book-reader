//

var searchQuery = document.querySelector("#search");
var searchButton = document.querySelector("#searchBtn");
var addButtons = document.querySelectorAll("#addToListBtn");
var searchData = localStorage.getItem("searchinfo");
var listSelect = document.querySelectorAll("#listSelect");
var resultsBox = document.querySelector("#results")


//const herokuAPI = "https://ravishing-reads-a2209ea97ad8.herokuapp.com/";
//const herokuAPI = "http://localhost:3001/";

console.log(searchData);

console.log(addButtons);

searchButton.addEventListener("click", function checking(event) {
  event.preventDefault();
  searchTerm = searchQuery.value;
  console.log(searchTerm);
  var searchAPI = "search/" + searchTerm;
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
  var searchData = localStorage.getItem(("search"));
  console.log(JSON.parse(searchData));
  return
}

accessResults();


function addToList (event) {
  event.preventDefault()

  var searchInfo = localStorage.getItem(("search"));
  //console.log(JSON.parse(searchData));
  searchData = JSON.parse(searchInfo)
  console.log(searchData);
  // Convert the `data-count` attribute from a string to an integer.
 //let bookBtn = event.target
  let index = parseInt(event.target.getAttribute('datacount'));
  console.log(listSelect.classlist)

  // Check to see if the element is a button.
  if (event.target.matches('button')) {
    listSelect[index].classList.remove("hidden")
    let addAPI = "book/"
    let bookInfo = {
      title: searchData[index].title,
      authorName: searchData[index].authors,
      ISBN: searchData[index].industryIdentifiers,
      pubDat: searchData[index].publishedDate,
      publisher: searchData[index].publisher,
      pageCount: searchData[index].pageCount,
     //bookLink: searchData[index].link,
      imgLink: searchData[index].thumbnail,
      description: searchData[index].fulldescription,
    }
    console.log(bookInfo)
    post(addAPI)(bookInfo)
    
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

