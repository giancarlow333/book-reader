// Create user   /api/users
const router = require('express').Router();
const User = require('../../../models/user')

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
		return res.status(400).json({ error: 'You must provider username, first name, last name, password, and email'});
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
router.get("/", async (req,res) =>{
	try{
		const allUsers =await User.findAll({})

		res.json(allUsers)
	} catch(err) {
		res.json(err)
	}
})

//delete user based off of id

router.delete("/:id", (req, res)=>{
	User.destroy({
		where: {
			id: req.params.id
		}
	}).then(data => (res.status(200).json(data)))
}
)
module.exports = router;