const passport = require('passport');
const User = require('../models/User');

passport.use(User.createStrategy());

// Serialize user data for sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
