const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');


const User = require('../models/user');

exports.getSignup = (req, res, next)=>{
    res.status(200).send("get signup page");
};

exports.getLogin = (req, res, next)=>{
    res.status(200).send("get login page");
};

exports.postSignup = (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    bcrypt
    .hash(password, 12)
    .then(hashedPassword => {
        const user = User.create({
            username: req.body.username,
            email: email,
            password: hashedPassword
        });
    })
    .then(result => {
        console.log("sucessfully created user");
        //res.redirect('/auth/login');
        res.status(200).send("success post signup page");
    })
    .catch(err => {
        console.log(err);
        return next();
    })
   
};
exports.checkEmail = (req, res, next) => {
   res.status(200).json({
      state: '0'
   });
}
exports.postLogin = (req, res, next)=>{
    res.status(200).send("post login page");
};

exports.postLogout = (req, res, next)=>{
    res.status(200).send("post logout page");
};
