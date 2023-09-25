const router = require('express').Router();
const userRoutes = require('./userRoutes');

//localhost
router.use('/users', userRoutes);
//router.use("/books", bookRoutes)

module.exports = router;