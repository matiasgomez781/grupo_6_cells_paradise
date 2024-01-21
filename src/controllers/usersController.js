const usersService = require("../data/usersService");

const usersController = {
  login: (req, res) => {
    res.render("./users/login");
  },

  register: (req, res) => {
    res.render("./users/registro");
  },

  newUser: (req, res) => {
    req.body.avatar = req.file.filename;
    usersService.save(req.body); //, req.file
    res.redirect(`/users/profile/${req.body.id}`);
  },

  getOne: (req, res) => {
    res.render("./users/perfil", { user: usersService.getById(req.params.id) });
  },
};

module.exports = usersController;
