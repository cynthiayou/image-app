const Sequelize = require('sequelize');
const config = require('../config/config')

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    dialect: config.db.options.dialect,
    host: config.db.options.host,
    pool: {
      max: 10,
      min: 0,
    }
})

module.exports = sequelize;


