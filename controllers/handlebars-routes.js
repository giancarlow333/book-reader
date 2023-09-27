
const router = require('express').Router();

router.get('/index', async (req, res) => {
    res.render('index');
  });
  
  router.get('/signup', async (req, res) => {
    res.render('signup');
  });
  
  router.get('/results', async (req, res) => {
    res.render('results');
  });

  router.get('/book', async (req, res) => {
    res.render('book');
  });
module.exports = router;