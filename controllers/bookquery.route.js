const query = require('./utils/query-GoogleAPI.js')



router.get('/search/:searchTerm', withAuth, async (req, res) => {
 try { searchTerm = req
    const results = query(searchTerm) 
    res.render('results', { results });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  
}});

