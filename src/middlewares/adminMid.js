let adminMid = (req, res, next) => {
  if (!req.session.userLogged || req.session.userLogged.id_rol !== 1) {
    return res.redirect("/");
  }
  next();
};

module.exports = adminMid;
