const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/login', authController.login);

router.post('/signup', authController.signup);

router.post('/logout', authController.logout);

router.post('/checkemail', authController.checkEmail);
module.exports = router;
