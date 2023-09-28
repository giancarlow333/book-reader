// Create user   /api/users
const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

//localhost:3001/auth/

router.post('/signup', async (req, res) => {
    const {
        username,
        name,
        email,
        password,
        reEnterPassword,
    } = req.body;

    //might need to add additional parameters for reEnterPassword
    if (!username || !email || !password) {
        //return res.status(400).json({ error: 'You must provider username, first name, last name, password, and email' });
        res.redirect('../signup');
    }

	console.log("Sign Up Route 2");

    // PaSsWoRd
    try {
        const newUser = await User.create({
            name,
            username,
            email,
            password,
            reEnterPassword,

        });
        console.log(newUser);

        //set session data
        CreateSessionData(req, newUser);

		console.log("success");

        res.redirect('../results');
    } catch (e) {
        console.log(e);
        // res.json(e);
        res.redirect('../signup');
    }

});
router.get('/logout', async (req, res) => {
    req.session.destroy();
    res.redirect('../')
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        //return res.status(401).json({ error: 'You must provide a valid username and password' });
        res.redirect('../');
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
            //return res.status(400).json({ error: 'No user with that username' });
            res.redirect('../');
        }
        //	take the users hashed password and compare it with the password that they're passing in from the form
        const isMatching = await bcrypt.compare(password, user.password)
        console.log(isMatching);
        if (!isMatching) {
            //return res.status(401).json({ error: 'Invalid password' });
            res.redirect('../');
        }
        //return res.status(200).json({ message: 'You are now logged in successfully' });
        CreateSessionData(req, user);

        res.redirect('../results');
    } catch (e) {
        console.log(e);
        res.redirect('../');
        //return res.status(200).json(e);
    }
});

function CreateSessionData(req, user) {
    //session variables
    req.session.username = user.username;
    req.session.email = user.email;
}


module.exports = router;