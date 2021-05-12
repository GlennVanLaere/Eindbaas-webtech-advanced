const User = require('../models/User');

const showSignup = (req, res) => {
    res.render('auth/signup', { title: 'signup' })
}

const handleSignup = async (req, res, next) => {
    let email = req.body.email;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let password = req.body.password;

    const user = new User({ username: email, firstname: firstname, lastname: lastname });
    await user.setPassword(password);
    await user.save()
        .then(result => {
            res.json({
                'status': 'success'
            })
        })
        .catch(error => {
            res.json({
                'status': 'error'
            })
        });
}

const showLogin = (req, res) => {
    res.render('auth/login', { title: 'Login' })
}

const handleLogin = (req, res) => {
}

module.exports.showSignup = showSignup;
module.exports.handleSignup = handleSignup;
module.exports.showLogin = showLogin;
module.exports.handleLogin = handleLogin;
