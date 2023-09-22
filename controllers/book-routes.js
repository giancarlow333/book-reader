const router = require('express').Router();
const { Book } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbBookData = await Book.findAll({
      include: [
        {
          model: Book,
          attributes: ['title', 'authorLast'],
        },
      ],
    });

    const books = dbBookData.map((book) =>
      book.get({ plain: true })
    );

    res.render('homepage', {
      books,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one book
router.get('/book/:id', async (req, res) => {
  try {
    const dbBookData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: Book,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const book = dbBookData.get({ plain: true });
    res.render('book', { book });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a book to the database
router.post('/book', async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.params.title,
      authorFirst: req.params.authorFirst,
      authorLast: req.params.authorLast,
      ISBN: req.params.ISBN,
      pubDate: req.params.pubDate,
      pageCount: req.params.pageCount,
      availability: req.params.availability
    });

    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
