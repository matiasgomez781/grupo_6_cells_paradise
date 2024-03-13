let adminMid = (req, res, next) => {
  if (!req.session.userLogged || req.session.userLogged.admin == 0) {
    return res.redirect("/");
  }
  next();
};

module.exports = adminMid;
