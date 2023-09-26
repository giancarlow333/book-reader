const router = require('express').Router();
const {
	Todo,
	User,
} = require('./../models');

const apiRoutes = require('./api');
// localhost:3001/api/

router.use('/api', apiRoutes);

router.get('/', async(req,res) => {
	res.render('index', {layout: "main", title: "Sign Up", test:"Test"})
});
router.get('/signup', async(req,res) => {
	res.render('signup', {layout: "main", title: "Sign Up", test:"Test"})
});

router.get('/dashboard', async(req,res) => {
	res.render('bookDetails', {layout: "main", title: "Dashboard", test:"Test"})
});

// router.post('/signup', async(req, res)=>{
// 	const serverRequest = await fetch('/api/users')
// 	.then((response)=>{
// 		console.log(response.json);
// 		return response.json();
// 	})
// })


module.exports = router;