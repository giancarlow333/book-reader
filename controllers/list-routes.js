const router = require('express').Router();
const { Book, List, ListContents } = require('../models');

// GET all books in a particular list
router.get('/list/:listid',  async (req, res) => {
    try {
        const listBooks = await ListContents.findByPk(req.params.listid, {
            include: [{
                model: ListContents,
                attributes: [ 'bookID' ]
            }]
        });

        const list = listBooks.get({ plain: true });
        res.render('__handlebarsname__', { list });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});