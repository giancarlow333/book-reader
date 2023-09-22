const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { primaryKeyAttribute } = require('./book');

class Notes extends Model {}

Notes.init(
    {
        userID: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        bookID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'book',
                key: 'id',
            },
        },
        /* GW: I don't believe this is necessary
        listID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        */
        descriptionSummary: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
        notes: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'notes'
    }
);

module.exports = Notes;
