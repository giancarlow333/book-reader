const router = require('express').Router();

const bookRoutes = require('./book-routes.js');
const listRoutes = require('./list-routes.js');
// const apiRoutes = require('./api-routes.js');
const userRoutes = require('./user-routes.js')
const authRoutes = require('./auth-routes.js');
const bookqueryRoutes = require("./bookquery-route.js")
const bookdetailRoutes = require("./bookdetails-route.js")

// do we need this? - JW
const {
	Todo,
	User,
} = require('./../models');


router.use('/book', bookRoutes);
router.use('/list', listRoutes);
router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/search', bookqueryRoutes);
router.use('/bookdetail', bookdetailRoutes);


router.get('/', async (req, res) => {
	if (req.session.username){
		res.redirect('/search')
	}
	else
	res.render('index', { layout: "main", title: "Sign In", test: "Test" })
});

router.get('/signup', async (req, res) => {
	if (req.session.username){
		res.redirect('/search')
	}
	else
	res.render('signup', { layout: "main", title: "Sign Up", test: "Test" })

});

router.get('/search', async (req, res) => {
	if (req.session.username) {
		res.render('search', { layout: "main", title: "search", username: req.session.username })
	}
	else {
		res.redirect('/');
	}
});

module.exports = router;

//testing

//testing handlebars 
