// ar 

const express = require('express');
const router = express.Router();
//const Book = require('../models/Book');  // Import the Book model

// Get one book with serialized data
router.get('/bookdetail/:id', async (req, res) => {
  try {
    // Search the database for a book with an id that matches params
    const bookData = await Book.findByPk(req.params.id);
    console.log(bookData);

    // Serialize the object to include only the data needed
    const book = bookData.get({ plain: true });

    // Render the 'bookdetail' template and pass the book into the template
    res.render('bookdetail', { book });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
