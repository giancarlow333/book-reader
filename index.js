const path = require('path'); 
const express = require('express');

//-----handlebars------
const exphbs =require('express-handlebars');
const hbs = exphbs.create({});

//-------------
const sequelize = require('./config');
// const routes = require('./routes');
// Importing the Sequelize session storage functionality
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

// Create an object storing the session data
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: true,
    saveUninitialized: true,
    // store: new SequelizeStore({
    //     db: sequelize,
    // }),
};

// Actually use the session data fron the object above
app.use(session(sess));  
/*

const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure:true }
}));*/

//------inititalize and istance of HANDLEBARS ------
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
//-----------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(require('./controllers/index.js'))

//app.use(routes);



// We are going to build our folders and APS's in such a way where our folder strucatures will math ourendpoints.  This is accomplished by using "routing middleware"

// Connect to the db prior to starting our server;
// Force the db to drop/recreate the table whenever we start/restart our server (DO NOT DO THIS IN PRODUCTION OR YOU WILL DELETE INFO IN SERVER)
//make sure to know when you want to force true or false
/// NOTE: use force: false, for PRODUCTION or to preserve server data
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});