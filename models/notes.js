const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { primaryKeyAttribute } = require('./book');

class notes extends Model {}

notes.init(
    {
userID: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
},
bookID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
},    
listID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
},
descriptionSummary: {
    type: DataTypes.STRING,
},
rating: {
type: DataTypes.INTEGER,
},
notes: {
    type: DataTypes.STRING,
}
    }
    );

    Model.exports = notes