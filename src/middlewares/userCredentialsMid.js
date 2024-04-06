function userCredentialsMid(req, res, next) {
    const userLogged = req.session.userLogged
    if (userLogged) {
        res.locals.loggedIn = true;
        res.locals.userLogged = userLogged;
    }
next();
}
module.exports = userCredentialsMid;