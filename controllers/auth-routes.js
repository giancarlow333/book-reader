// Create user   /api/users
const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const { List } = require("../models");

//localhost:3001/auth/

router.post("/signup", async (req, res, next) => {
  // PaSsWoRd
  try {
    const { username, name, email, password, confirmation } = req.body;

    //might need to add additional parameters for reEnterPassword
    if (!username || !email || !password || !confirmation || !name) {
      //return res.status(400).json({ error: 'You must provider username, first name, last name, password, and email' });
      console.log("missing fields");
      res.redirect("../signup");
      return;
    }

    if (password !== confirmation) {
      console.log("Password mismatch: " + password + ", " + confirmation);
      res.redirect("../signup");
      return;
    }

    const newUser = await User.create({
      name,
      username,
      email,
      password,
    });
    console.log(newUser);

    const readingList = await List.create({
      creatorID: newUser.id,
      listName: "Reading List",
    });
    const wishList = await List.create({
      creatorID: newUser.id,
      listName: "Wishlist",
    });
    const favoritesList = await List.create({
      creatorID: newUser.id,
      listName: "Favorites",
    });
    const alreadyReadList = await List.create({
      creatorID: newUser.id,
      listName: "Already Read",
    });

    //set session data
    CreateSessionData(req, newUser);

    console.log("success");

    res.redirect("../search");
    return;
  } catch (e) {
    console.log(e);
    // this is where you log to a file
    // res.json(e);
    console.log(e);
    res.redirect("../signup");
    return;
  }
});
router.get("/logout", async (req, res) => {
  req.session.destroy();
  res.redirect("../");
  return;
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      //return res.status(401).json({ error: 'You must provide a valid username and password' });
      console.log("Missing a username or a password");
      res.redirect("../");
      return;
    }

    //	find the user with the given email
    const user = await User.findOne({
      where: {
        username,
      },
    });
    //	check if the user actually exists with that given email
    if (user == null) {
      //	if no user exists, give them a 400
      //return res.status(400).json({ error: 'No user with that username' });
      console.log("User does not exist");
      res.redirect("../");
      return;
    }
    //	take the users hashed password and compare it with the password that they're passing in from the form
    const isMatching = await bcrypt.compare(password, user.password);
    console.log(isMatching);
    if (!isMatching) {
      //return res.status(401).json({ error: 'Invalid password' });
      console.log("Incorrect password");
      res.redirect("../");
      return;
    }
    //return res.status(200).json({ message: 'You are now logged in successfully' });
    CreateSessionData(req, user);

    console.log("success");
    res.redirect("../");
    return;
  } catch (e) {
    console.log(e);
    res.redirect("../");
    return;
    //return res.status(200).json(e);
  }
});

function CreateSessionData(req, user) {
  //session variables
  req.session.username = user.username;
  req.session.email = user.email;
}

module.exports = router;
