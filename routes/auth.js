var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');

router.get('/login',  authController.showLogin);
router.post('/login',  authController.handleLogin);

router.get('/signup',  authController.showSignup);
router.post('/signup',  authController.handleSignup);

module.exports = router;