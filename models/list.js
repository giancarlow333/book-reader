const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/index.js');

class List extends Model {}

List.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    
        listName:{
            type: DataTypes.STRING,
            allowNull: false
        },
    
        creatorID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
      sequelize, 
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'list',
    }
);

module.exports = List;
