const {bookQuery} = require('../utils/query-GoogleAPI.js')
const router = require("express").Router()

router.get('/', (req, res) => {
  res.redirect('/search/W')
})

router.get('/:searchTerm', async (req, res) => {
 try { const searchTerm = req.params.searchTerm  || "Windup Girl"
  console.log(searchTerm)
    const results = await bookQuery(searchTerm) 
    console.log("Before Search");
    //console.log(results)
    console.log("Before Render");
    res.render('results', { results });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
}});

module.exports = router

