const User = require('./user');
const Book = require('./book');
const List = require('./list');
const Notes = require('./notes')
// put model associations and references here
//User.hasMany(Book)





module.exports = {
	User, Book, List, Notes
};

