"use strict"
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Image = sequelize.define("Image",{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  }

});

module.exports = Image;
