let authMid = async (req, res, next) => {
  const userLogged = await req.session.userLogged;
  if (userLogged) {
    return res.redirect("/users/profile/" + userLogged.id);
  }

  next();
};

module.exports = authMid;
