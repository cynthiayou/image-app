/**
 * Required External Modules
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const morgan = require('morgan');

const authRoutes= require('./routes/auth');
const imageRoutes = require('./routes/image');
const sequelize = require('./util/database');
const config = require('./config/config')
const User = require('./models/user');
const Image = require('./models/image');
const Comment = require('./models/comment');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes Definitions
 */

app.use('/auth', authRoutes);
app.use(imageRoutes);

Image.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Image, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(Image, { foreignKey: 'imageId' });
Image.hasMany(Comment, { foreignKey: 'imageId' });
/**
 * 
 * Server Activation
 */

sequelize
    .sync()
    .then(result => {
        app.listen(config.port, ()=>{
            console.log(`Listening to requests on port ${config.port}`);
        })
    });


