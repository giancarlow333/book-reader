const readingList = document.querySelector("#readingList")
const wishList = document.querySelector("#wishList")
const favList = document.querySelector("#favList")
const readList = document.querySelector("#readList")

const herokuAPIL = "https://ravishing-reads-a2209ea97ad8.herokuapp.com/";
//const herokuAPIL = "http://localhost:3001/";

const user = document.cookie

console.log (user)


function userLists() {
    let listAPI = herokuAPIL + "list/" 
    fetch(listAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      localStorage.setItem("lists", JSON.stringify(data));
      console.log(data);
      return data;
})
}

function viewList () {
    let listAPI = herokuAPI + "list/" 


    //location.replace(listAPI);
}

readingList.addEventListener("click", viewList())




