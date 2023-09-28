const User = require('./user');
const Book = require('./book');
const List = require('./list');
const Notes = require('./notes');
const ListContents = require('./listContents');
// put model associations and references here

// A list can have many (contain) books
ListContents.hasMany(Book, {
	foreignKey: 'bookID',
	onDelete: 'CASCADE',
});

/* A book can belong to many lists
Book.belongsToMany(ListContents, {

});
*/
ListContents.belongsTo(List, {
	foreignKey: 'listID',
});

// A list belongs to one user
List.belongsTo(User, {
	foreignKey: 'creatorID'
});

module.exports = {
	User, Book, List, ListContents, Notes
};

