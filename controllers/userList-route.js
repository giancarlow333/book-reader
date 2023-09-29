//aa
const express = require('express');
const router = express.Router();
//const List = require('../models/List');  // Import the List model

// Get one list with serialized data
router.get('/list/:id', async (req, res) => {
  try {
    // Search the database for a list with an id that matches params
    const listData = await List.findByPk(req.params.id);
    console.log(listData);

    // Serialize the object to include only the data needed
    const list = listData.get({ plain: true });

    // Render the 'list' template and pass the list into the template
    res.render('list', { list });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
