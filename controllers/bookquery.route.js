const query = require('./utils/query-GoogleAPI.js')

router.get('/search/:searchTerm', withAuth, async (req, res) => {
 try { searchTerm = req
    const result = query(searchTerm) 
    res.render('results', { result });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  
}});
