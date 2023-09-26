var books = require('google-books-search');



books.search('Shining King', function(error, results) {
    if ( ! error ) {
        console.log(results);
        return response.json();
    } else {
        console.log(error);
    }
    results
});





//books.lookup('9KJJYFIss_wC', function(error, results) {
   // if ( ! error ) {
     //   console.log(results);
  //  } else {
    //    console.log(error);
 //   }
//});

//code codee
//var options = {
   // key: "YOUR API KEY",
   // field: 'title',
  //  offset: 0,
  //  limit: 10,
  //  type: 'books',
  //  order: 'relevance',
  //  lang: 'en'
//};


