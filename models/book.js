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
    //do we want both first & last name or just author name?
    authorFirst: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorLast: { 
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