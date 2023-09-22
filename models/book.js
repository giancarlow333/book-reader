const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    // API provides only a single name string
    authorName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //for ISBN pub date & page count data type will depend on how return from APi whether integer, string, or date. 
    ISBN: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pubDate: {
        type: DataTypes.DATE,
    },
    publisher: {
        type: DataTypes.STRING,
    },
    pageCount:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    availability: {
        type: DataTypes.BOOLEAN,
        // allowNull: false,
    }    
  },
  {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;