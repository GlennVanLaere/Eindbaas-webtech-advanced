const showLogin = (req, res) => {
    res.render('auth/login', { title: 'Login'})
}

const handleLogin = (req, res) => {
}

const showSignup = (req, res) => {
    res.render('auth/signup', { title: 'signup'})
}

const handleSignup = (req, res) => {
    
}

module.exports.showLogin = showLogin;
module.exports.handleLogin = handleLogin;
module.exports.showSignup = showSignup;
module.exports.handleSignup = handleSignup;