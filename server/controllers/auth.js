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
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });
    res.send("signed up")       
  }catch(err){
    console.log(err);
    return next();
  }   
};
exports.checkEmail = async (req, res, next) => {
  const user = await User.findOne({
    where: { email: req.body.email }
  })
  if (user){
    res.send({
      //State 1 indicates the email has already been taken
      state: '1'
    })
  }else{
    res.send({
      //State 0 indicates the email is available to use
      state: '0'
    })
  }
}
exports.login = async (req, res, next)=>{
  try{
    const user = await User.findOne({
      where: { email: req.body.email }
    })
    if (user){
      bcrypt.compare(req.body.password, user.password)
      .then((doMatch) => {
        if (doMatch){
          const userJson = user.toJSON()
          res.send({
            state: '0',
            user: {
              id: user.id,
              username: user.username
            },
            token: jwtSignUser(userJson)
          })
        }else{
          res.send({
            state: '1',
            error: "Password doesn't match"
          })
        }        
      })
    }
  }catch(err){
    res.status(500).send({
      state: 1,
      error: 'An error has occured trying to log in'
    })
    return next();
  }
  
};

exports.logout = (req, res, next)=>{
    res.status(200).send("post logout page");
};
