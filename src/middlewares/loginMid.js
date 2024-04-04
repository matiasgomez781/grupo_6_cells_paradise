const usersService = require("../data/usersService");

const loginMid = async (req, res, next) => {
  try {
    if (req.cookies.rememberMe) {
      let userData = await usersService.findByField("email", req.cookies.rememberMe);
      req.session.userLogged = userData;
    }
  } catch (error) {
    console.log(error.message);
    return next(error);
  }

  next();
};

module.exports = loginMid;
