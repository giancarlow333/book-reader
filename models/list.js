const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class list extends Model {}

list.init(
  {
    listID:{
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
allowNull: false,
    },
    
    listName:{
type: DataTypes.STRING,
allowNull: false,
primaryKey: true,
    },
    
    creatorID:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   
    numOfBooks: {
        type: DataTypes.INTEGER,
        allowNull: false,

    }
   
}
),