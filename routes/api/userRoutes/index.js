// Create user   /api/users
const router = require('express').Router();
const User = require('../../../models/user')

router.post('/', async (req, res) => {
	const {
		username,
        name,
		email,
		password,
        reEnterPassword,
	} = req.body;
//might need to add additional parameters for reEnterPassword
	if (!username || !email || !password) {
		return res.status(400).json({ error: 'You must provider username, first name, last name, password, and email'});
	}

	// PaSsWoRd
	try {
		const newUser = await User.create({
			username,
            firstname,
            lastname,
			email,
			password,
			reEnterPassword,

		});
		res.json(newUser);
	} catch (e) {
		console.log(e);
		res.json(e);
	}

});
module.exports = router;