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
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        console.log(errors.array());
        return res.status(422).redirect("/auth/signup");
    }
    bcrypt
    .hash(password, 12)
    .then(hashedPassword => {
        const user = User.build({
            name: req.body.name,
            email: email,
            password: hashedPassword
        });
        return user.save();
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

exports.postLogin = (req, res, next)=>{
    res.status(200).send("post login page");
};

exports.postLogout = (req, res, next)=>{
    res.status(200).send("post logout page");
};
