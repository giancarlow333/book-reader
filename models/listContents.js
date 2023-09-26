const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/index.js');

class ListContents extends Model {}

ListContents.init(
    {
        listID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'list',
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
    },
    {
      sequelize, 
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'listcontents',
    }
);

module.exports = ListContents;