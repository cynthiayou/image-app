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
    const user = await User.create(req.body);
    const userJson = user.toJSON()
    res.send({
      user: {
        id: user.id,
        username: user.username
      },
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
exports.login = async (req, res, next)=>{
  try{
    const user = await User.findOne({
      where: { email: req.body.email }
    })
    if (user){
      bcrypt.compare(req.body.password, user.password)
      .then((doMatch) => {
        const userJson = user.toJSON()
        res.send({
          user: {
            id: user.id,
            username: user.username
          },
          token: jwtSignUser(userJson)
        })
      })
    }else {
      return res.status(403).send({
        error: 'The login information was incorrect'
      })
    }
  }catch(err){
    res.status(500).send({
      error: 'An error has occured trying to log in'
    })
    return next();
  }
  
};

exports.logout = (req, res, next)=>{
    res.status(200).send("post logout page");
};
