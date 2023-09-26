const express = require('express');

const sequelize = require('./config/index.js');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(routes);

// We are going to build our folders and APS's in such a way where our folder strucatures will math ourendpoints.  This is accomplished by using "routing middleware"

// Connect to the db prior to starting our server;
// Force the db to drop/recreate the table whenever we start/restart our server (DO NOT DO THIS IN PRODUCTION OR YOU WILL DELETE INFO IN SERVER)
//make sure to know when you want to force true or false
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});