var books = require('google-books-search');
//var searchpage = require('.../views/results.handlebars')

//const router = require('express').Router();
//const User = require('../../../models/user');
//const bcrypt = require('bcryptjs');
//const { Op } = require('sequelize');

app.use(express.static('views'));

const searhkey = document.querySelector('input[name="search"]');

console.log(searchkey)

var options = {
   // key: "YOUR API KEY",
   // field: 'title',
  //  offset: 0,
   limit: 30,
   type: 'books',
  //  order: 'relevance',
  //  lang: 'en'
};


books.search(searchkey, options, function(error, results) {
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
        return bookreturn;
    } else {
        console.log(error);
    }
    results
});



module.exports = bookreturn

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


