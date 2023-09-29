const query = require('../utils/query-GoogleAPI.js')
const router = require("express").Router()


router.get('/search/:searchTerm', async (req, res) => {
 try { const searchTerm = req.params.searchTerm
  console.log(searchTerm)
    const results = query(searchTerm) 
    res.render('results', { results });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  
}});

module.exports = router