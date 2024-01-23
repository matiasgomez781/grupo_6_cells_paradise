const usersService = require("../data/usersService");

const loginMid = (req, res, next) => {
  if (req.cookies.rememberMe) {
    let userData = usersService.findByField("email", req.cookies.rememberMe);
    req.session.userLogged = userData;
  }

  next();
};

module.exports = loginMid;
