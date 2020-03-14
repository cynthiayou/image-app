const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next)=>{
    res.status(200).send("get login page");
});

router.get('/signup', (req, res, next)=>{
    res.status(200).send("get signup page");
});

router.post('/login',(req, res, next)=>{
    res.status(200).send("post login page");
});

router.post('/signup', (req, res, next)=>{
    res.status(200).send("post signup page");
});

router.post('/logout', (req, res, next)=>{
    res.status(200).send("post logout page");
});

module.exports = router;
