const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const User = require('../models/user');

function jwtSignUser(user){
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

exports.signup = async (req, res, next)=>{
  try{
    // const email = req.body.email;
    // const password = req.body.password;
    // console.log(email);
    // console.log(password);
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await User.create(req.body);
    const userJson = user.toJSON()
    res.send({
      user: userJson,
      token: jwtSignUser(userJson)
    })    
  }catch(err){
    console.log(err);
    return next();
  }
   
};
exports.checkEmail = (req, res, next) => {
   res.status(200).json({
      state: '0'
   });
}
exports.login = (req, res, next)=>{
    res.status(200).send("post login page");
};

exports.logout = (req, res, next)=>{
    res.status(200).send("post logout page");
};
