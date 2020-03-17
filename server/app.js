/**
 * Required External Modules
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const multer = require('multer');
// const morgan = require('morgan');

const authRoutes= require('./routes/auth');
const imageRoutes = require('./routes/image');
const sequelize = require('./util/database');
const User = require('./models/user');
const Image = require('./models/image');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// })

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// }
/**
 *  App Configuration
 */
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use(
//   multer({storage: fileStorage, fileFilter: fileFilter }).single('image')
// )
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes Definitions
 */

app.use('/auth', authRoutes);
app.use(imageRoutes);

Image.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Image);
/**
 * 
 * Server Activation
 */

sequelize
    .sync()
    .then(result => {
        app.listen(port, ()=>{
            console.log(`Listening to requests on http://localhost:${port}`);
        })
    });


