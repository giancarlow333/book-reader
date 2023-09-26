const router = require('express').Router();

const bookRoutes = require('./book-routes.js');

router.use('/', bookRoutes);

module.exports = router;


//testing