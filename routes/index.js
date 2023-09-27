const router = require('express').Router();
const {
	Todo,
	User,
} = require('./../models');

const apiRoutes = require('./api');
// localhost:3001/api/

router.use('/api', apiRoutes);

const authRoutes = require('./auth');
// localhost:3001/api/

router.use('/auth', authRoutes);

router.get('/', async (req, res) => {
	if (req.session.username){
		res.redirect('/dashboard')
	}
	else
	res.render('index', { layout: "main", title: "Sign Up", test: "Test" })
});
router.get('/signup', async (req, res) => {
	if (req.session.username){
		res.redirect('/dashboard')
	}
	else
	res.render('signup', { layout: "main", title: "Sign Up", test: "Test" })

});

router.get('/dashboard', async (req, res) => {
	if (req.session.username) {
		res.render('dashboard', { layout: "main", title: "Dashboard", username: req.session.username })
	}
	else {
		res.redirect('/signup');
	}
});

// router.post('/signup', async(req, res)=>{
// 	const serverRequest = await fetch('/api/users')
// 	.then((response)=>{
// 		console.log(response.json);
// 		return response.json();
// 	})
// })


module.exports = router;