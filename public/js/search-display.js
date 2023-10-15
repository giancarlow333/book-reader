//

var searchQuery = document.querySelector("#search");
var searchButton = document.querySelector("#searchBtn");
var addButtons = document.querySelectorAll("#addToListBtn");
var searchData = localStorage.getItem("searchinfo");
var listSelect = document.querySelectorAll("#listSelect");
var resultsBox = document.querySelector("#results");

//const herokuAPI = "https://ravishing-reads-a2209ea97ad8.herokuapp.com/";
//const herokuAPI = "http://localhost:3001/";

console.log(searchData);

console.log(addButtons);

searchButton.addEventListener("click", function checking(event) {
  event.preventDefault();
  searchTerm = searchQuery.value;
  console.log(searchTerm);
  var searchAPI = herokuAPI + "search/" + searchTerm;
  var searchAPIJSON = searchAPI + "/json";
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
      return data;
    });
  //localStorage.setItem(("search.json", response.json));

  location.replace(searchAPI);
});

//addButtons.addEventListener("click", function bookadd(event) {
//event.preventDefault();
//  var x =2
//});

function accessResults() {
  var searchData = localStorage.getItem("search");
  console.log(JSON.parse(searchData));
  return;
}

accessResults();

function addToList(event) {
  event.preventDefault();

  var searchInfo = localStorage.getItem("search");
  //console.log(JSON.parse(searchData));
  searchData = JSON.parse(searchInfo);
  console.log(searchData);
  // Convert the `data-count` attribute from a string to an integer.
  //let bookBtn = event.target
  let index = parseInt(event.target.getAttribute("datacount"));
  console.log(listSelect[index].classlist);

  // Check to see if the element is a button.
  if (event.target.matches("button")) {
    if (listSelect[index].classList.contains("hidden")) {
      listSelect[index].classList.remove("hidden");
      listSelect[index].classList.add("visible");
      let addAPI = herokuAPI + "book/";
      let bookInfo = {
        title: searchData[index].title,
        authorName: searchData[index].authors[0],
        ISBN: searchData[index].industryIdentifiers,
        pubDat: searchData[index].publishedDate,
        publisher: searchData[index].publisher,
        pageCount: searchData[index].pageCount,
        //bookLink: searchData[index].link,
        imgLink: searchData[index].thumbnail,
        description: searchData[index].fulldescription,
      };
      console.log(bookInfo);
      fetch(addAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Successful POST request:", data);
          return data;
        })
        .catch((error) => {
          console.error("Error in POST request:", error);
        });
    } else {
      listSelect[index].classList.remove("visible");
      listSelect[index].classList.add("hidden");
    }
  }
}

resultsBox.addEventListener("click", addToList);

//addButtons addtoList (event) {
// for(let i=0; i < addButtons.length; i++) {
//  addButtons[i].addEventListener("click", function (){

//   })

/// }
//})
