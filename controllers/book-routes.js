const router = require('express').Router();
const { Book, List, ListContents } = require('../models');
const withAuth = require('../utils/auth');

// GET one book
// withAuth makes sure you're logged in before showing you any pages
router.get('/book/:id', withAuth, async (req, res) => {
  try {
    const dbBookData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: Book,
          attributes: [
            'id',
            'title',
            'authorName',
            'ISBN',
            'pubDate',
            'publisher',
            'pageCount',
            'availability'
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
      authorName: req.params.authorName,
      ISBN: req.params.ISBN,
      pubDate: req.params.pubDate,
      publisher: req.params.publisher,
      pageCount: req.params.pageCount,
      availability: req.params.availability
    });

    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
