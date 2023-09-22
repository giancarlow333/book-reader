const router = require('express').Router();
const {
	Todo,
	User,
} = require('./../models');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;