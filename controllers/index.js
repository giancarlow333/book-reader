const router = require('express').Router();

const bookRoutes = require('./book-routes.js');
const listRoutes = require('./list-routes.js');

router.use('/', bookRoutes);
router.use('/', listRoutes);

module.exports = router;


//testing

//testing handlebars 
