const User = require('./user');
const Book = require('./book');
const List = require('./list');
const Notes = require('./notes');
const ListContents = require('./listContents');
// put model associations and references here
//User.hasMany(Book)

module.exports = {
	User, Book, List, ListContents, Notes
};

