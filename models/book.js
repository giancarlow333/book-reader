const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/index.js');

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
        defaultValue: "Anonymous",
    },
    //for ISBN pub date & page count data type will depend on how return from APi whether integer, string, or date. 
    ISBN: {
        type: DataTypes.STRING,
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
    },
    bookLink: {
        type: DataTypes.STRING,
    },
    imgLink: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    }
  },
  {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Book',
  }
);

module.exports = Book;