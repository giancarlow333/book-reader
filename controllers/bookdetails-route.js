// ar 

const express = require('express');
const router = express.Router();
const { Book, Notes, ListContents } = require('../models');
//const Book = require('../models/Book');  // Import the Book model
const { Op } = require("sequelize");

// Get one book with serialized data
router.get('/:id', async (req, res) => {
  try {
    // Search the database for a book with an id that matches params
    let books = await Book.findAll();
    console.log(books)
    const bookData = await Book.findByPk(req.params.id);
    console.log(bookData);

    const noteData = await Notes.findAll({
			where: {
				userID: { 
					[Op.like]: '%' + req.params.username + '%' 
				},
        bookID: { 
					[Op.like]: '%' + req.params.id + '%' 
				}
			}
		})
    console.log(noteData);

    // Serialize the object to include only the data needed
    const bookinfo = bookData.get({ plain: true });
    const notesinfo = noteData.get({ plain: true});
    const book = bookinfo.concat(notesinfo)

    // Render the 'bookdetail' template and pass the book into the template
    res.render('book', { book });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/note', async (req, res) => {
  try {
    const newNote = await Notes.create({
      bookID: req.body.bookID,
      creatorID: req.body.userID,
      rating: req.body.rating,
      notes: req.body.notes,
    });

    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
