const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/index.js');

class List extends Model {}

List.init(
    {
        listID:{
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
        sequelize
    }
);

module.exports = List;
