let authMid = async (req, res, next) => {
  try {
    const userLogged = await req.session.userLogged;
    if (userLogged) {
      return res.redirect("/users/profile/" + userLogged.id);
    }
  } catch (error) {
    console.log(error.message);
    return next(error);
  }

  next();
};

module.exports = authMid;
