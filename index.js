const express = require('express');
const exphbs =require('express-handlebars'); //handlebars express
const sequelize = require('./config');
const path = require('path'); // handlebars 
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// inititalize and istance of HANDLEBARS 
const hbs = exphbs.create({});
// handlebars middleware set up
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// We are going to build our folders and APS's in such a way where our folder strucatures will math ourendpoints.  This is accomplished by using "routing middleware"

// Connect to the db prior to starting our server;
// Force the db to drop/recreate the table whenever we start/restart our server (DO NOT DO THIS IN PRODUCTION OR YOU WILL DELETE INFO IN SERVER)
//make sure to know when you want to force true or false
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});