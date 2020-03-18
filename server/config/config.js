const path = require('path')

module.exports = {
  port: process.env.PORT || 8000,
  db: {
    database: process.env.DB_NAME || 'image_app',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'cynthia',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../db.sql')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
  
}