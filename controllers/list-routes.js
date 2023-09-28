const router = require('express').Router();
const { Book, List, ListContents } = require('../models');
const withAuth = require('../utils/auth');

/* GW: Not sure where to put this
router.get('/', withAuth, async (req, res) => {
    try {
        const lists = await List.findByPk(req.params.creatorID, {
            include: [{
                model: List,
                attributes: [ 'bookID' ]
            }]
        });

        const list = lists.get({ plain: true });
        res.render('index', { list });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
*/

// GET all books in a particular list
router.get('/list/:listid',  async (req, res) => {
    try {
        const listBooks = await ListContents.findByPk(req.params.listid, {
            include: [{
                model: Book,
                attributes: [ 'bookID', 'title', 'authorName', 'ISBN', 'pubDate', 'publisher', 'pageCount', 'availability', 'bookLink', 'imgLink' ]
            }]
        });

        const list = listBooks.get({ plain: true });
        res.render('list', { list });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;