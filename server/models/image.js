"use strict"
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Image = sequelize.define("Image",{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'Conversations',
        key: 'id'
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'Users',
        key: 'id'
        },
    },
    imageName: {
        type: DataTypes.String,
        allowNull: false,
        unique: true
    },
});

module.exports = Image;
