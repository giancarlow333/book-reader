const router = require('express').Router();
const { Book, Notes, ListContents } = require('../models');
const withAuth = require('../utils/auth');

// GET one book
// withAuth makes sure you're logged in before showing you any pages
router.get('/:id', async (req, res) => {
  try {

    const dbBookData = await Book.findByPk(req.params.id)

    const book = dbBookData.get({ plain: true });
    res.render('book', { book });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a book to the database
router.post('/', async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      authorName: req.body.authorName,
      ISBN: req.body.ISBN,
      pubDate: req.body.pubDate,
      publisher: req.body.publisher,
      pageCount: req.body.pageCount,
      bookLink: req.body.bookLink,
      imgLink: req.body.imgLink,
      description: req.body.description,
    });

    res.status(200).json(newBook);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
