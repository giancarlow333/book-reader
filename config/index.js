const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
    sequelize = new Sequelize(
    //Name of db we want to connect to
    process.env.DB_NAME,
    //Which user do we want to connect as
    process.env.DB_USER,
    //What is the password of the user that we want to connect as
    process.env.DB_PASSWORD,
    //configuration object for the db we want to connect to
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
    );
}

module.exports = sequelize;