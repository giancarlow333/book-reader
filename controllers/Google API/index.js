var books = require('google-books-search');

var options = {
   // key: "YOUR API KEY",
   // field: 'title',
  //  offset: 0,
   limit: 30,
   type: 'books',
  //  order: 'relevance',
  //  lang: 'en'
};


books.search('Jen Badass', options, function(error, results) {
    if ( ! error ) {
       console.log(results[0]);
       // console.log(results[1].title)
       if (results[0].subtitle) {
        title = results[0].title + ": " + results[0].subtitle}
        else {title = results[0].title}
        let ISBNobject = results[0].industryIdentifiers.find(function(){return type='ISBN_13'})
        let ISBN = ISBNobject.identifier
       let bookreturn = [
        title,
       // console.log(Btitle)
        author = results[0].authors,
        pubdate = results[0].publishedDate.slice(0,4),
        publisher = results[0].publisher,
        ISBN,
        pages = results[0].pageCount,
        link = results[0].link,
        thumbnail = results[0].thumbnail, ]
        console.log(bookreturn)
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


