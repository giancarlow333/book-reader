const router = require('express').Router();

const bookRoutes = require('./book-routes.js');
const listRoutes = require('./list-routes.js');
// const apiRoutes = require('./api-routes.js');
const userRoutes = require('./user-routes.js')
const authRoutes = require('./auth-routes.js');
const bookqueryRoutes = require("./bookquery.route.js")

router.use('/', bookRoutes);
router.use('/', listRoutes);
router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/bookquery', bookqueryRoutes);

router.get('/', async (req, res) => {
	if (req.session.username){
		res.redirect('/results')
	}
	else
	res.render('index', { layout: "main", title: "Sign Up", test: "Test" })
});

router.get('/signup', async (req, res) => {
	if (req.session.username){
		res.redirect('/results')
	}
	else
	res.render('signup', { layout: "main", title: "Sign Up", test: "Test" })

});

router.get('/results', async (req, res) => {
	if (req.session.username) {
		res.render('results', { layout: "main", title: "results", username: req.session.username })
	}
	else {
		res.redirect('/signup');
	}
});

module.exports = router;

//testing

//testing handlebars 
