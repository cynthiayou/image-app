/**
 * Required External Modules
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const authRoutes= require('./routes/auth');
const imageRoutes = require('./routes/image');

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
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

/**
 * Routes Definitions
 */
app.use('/auth', authRoutes);
app.use(imageRoutes);

/**
 * 
 * Server Activation
 */
app.listen(port, ()=>{
    console.log(`Listening to requests on http://localhost:${port}`);
});

