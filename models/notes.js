const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { primaryKeyAttribute } = require('./book');

class notes extends Model {}

notes.init(
    {
userID: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
bookID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
},    
listID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
},
descriptionSummary: {
    type: DataTypes.STRING,
    allowNull: false,
},
rating: {
type: DataTypes.INTEGER,
primaryKey: true,
allowNull: false,
},
notes: {
    type: DataTypes.STRING,
    allowNull: false,
}
    }
    );