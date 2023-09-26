// Create user   /api/users
const router = require('express').Router();
const User = require('../../../models/user');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

//localhost:3001/api/users/

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
		return res.status(400).json({ error: 'You must provider username, first name, last name, password, and email' });
	}

	// PaSsWoRd
	try {
		const newUser = await User.create({
			name,
			username,
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
//get all users
router.get("/", async (req, res) => {
	try {
		const allUsers = await User.findAll({})

		res.json(allUsers)
	} catch (err) {
		res.json(err)
	}
})

//delete user based off of id

router.delete("/:id", (req, res) => {
	User.destroy({
		where: {
			id: req.params.id
		}
	}).then(data => (res.status(200).json(data)))
}
)

router.get("/:id", async (req, res) => {
	try {
		const user = await User.findOne({ where: { id: req.params.id } })

		return res.status(200).json(user)
	} catch (err) {
		return res.status(400).json(err)
	}
})

router.get("/find/username/:username", async (req, res) => {
	try {
		console.log("Searching");
		const allUsers = await User.findAll({
			where: {
				username: { 
					[Op.like]: '%' + req.params.username + '%' 
				}
			}
		})

		return res.status(200).json(allUsers)
	} catch (err) {
		console.log(err);
		return res.status(400).json({message:"Could not find user by username", error: err})
	}
})

router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(401).json({ error: 'You must provide a valid username and password' });
	}
	try {
		//	find the user with the given email
		const user = await User.findOne({
			where: {
				username,
			}
		});
		//	check if the user actually exists with that given email
		if (user == null) {
			//	if no user exists, give them a 400
			return res.status(400).json({ error: 'No user with that username' });
		}
		//	take the users hashed password and compare it with the password that they're passing in from the form
		const isMatching = await bcrypt.compare(password, user.password)
		//console.log(isMatching);
		if (!isMatching) {
			return res.status(401).json({ error: 'Invalid password' });
		}
		return res.status(200).json({ message: 'You are now logged in successfully' });
	} catch (e) {
		return res.status(200).json(e);
	}
});
module.exports = router;