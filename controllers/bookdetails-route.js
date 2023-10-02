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
    const book = bookData.get({ plain: true });

    // Render the 'bookdetail' template and pass the book into the template
    res.render('bookdetail', { book });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/note', async (req, res) => {
  try {
    const newNote = await Notes.create({
      bookID: req.params.bookID,
      creatorID: req.params.userID,
      rating: req.params.rating,
      notes: req.params.notes,
    });

    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
