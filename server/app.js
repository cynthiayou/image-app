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
const User = require('./models/user');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

/**
 * Routes Definitions
 */
app.post('/signup', (req, res, next) => {
    res.send({
        message: `Hello Hello piggy Your user was registered! Have fun!`
    })
})
app.use('/auth', authRoutes);
app.use(imageRoutes);

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


