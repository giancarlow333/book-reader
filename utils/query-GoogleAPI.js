var books = require("google-books-search");

const options = {
  // key: "YOUR API KEY",
  // field: 'title',
  //  offset: 0,
  limit: 15,
  type: "books",
  //  order: 'relevance',
  //  lang: 'en'
};

function bookQuery(searchTerm) {
  return new Promise((resolve, reject) => {
    books.search(searchTerm, function (error, results) {
      if (!error) {
        // console.log(results[0]);
        // console.log(results[1].title)
        const cleanResults = results.map((result) => {
          console.log(result);
          if (result.subtitle) {
            result.title = result.title + ": " + result.subtitle;
          }
          if(result.industryIdentifiers) {
           result.industryIdentifiers = result.industryIdentifiers.find(
             function () {
               return (type = "ISBN_13");
             }
           );
           result.industryIdentifiers = result.industryIdentifiers.identifier;}
          if(!result.publishedDate){
            result.publishedDate = "not listed";
          }
            result.publishedDate = result.publishedDate.substring(0, 4);
          if(!result.description){
            result.description = "not listed"; // Some results do not have descriptions, so we force one on it.
          }
          result.fulldescription = result.description;
          result.description = result.description.substring(0, 265) + "...";
          return result;
        });

        resolve(cleanResults);
      }
      else {
      reject(error);}
    });
  });
}

//bookQuery();

module.exports = { bookQuery };

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

//let ISBNobject = results[0].industryIdentifiers.find(function(){return type='ISBN_13'})
// let ISBN = ISBNobject.identifier

// let bookreturn = [
//  title,
// console.log(Btitle)
//  author = results[0].authors,
// pubdate = results[0].publishedDate.slice(0,4),
//  publisher = results[0].publisher,
//  ISBN,
//  pages = results[0].pageCount,
//  link = results[0].link,
//  thumbnail = results[0].thumbnail, ]
// console.log(bookreturn)
// return bookreturn;

//var searchpage = require('.../views/results.handlebars')

//const router = require('express').Router();
//const User = require('../../../models/user');
//const bcrypt = require('bcryptjs');
//const { Op } = require('sequelize');

//app.use(express.static('views'));

//const searhkey = document.querySelector('input[name="search"]');

//console.log(searchkey)
