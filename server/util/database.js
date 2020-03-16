const Sequelize = require('sequelize');

const sequelize = new Sequelize('image_app', 'root', 'cynthia', {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
      }
})

module.exports = sequelize;
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'image_app',
//     password: 'cynthia'
// });

// module.exports = pool.promise();


