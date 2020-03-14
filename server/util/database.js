const Sequelize = require('sequelize');

const sequelize = new Sequelize('image_app', 'root', 'cynthia', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'image_app',
//     password: 'cynthia'
// });

// module.exports = pool.promise();


