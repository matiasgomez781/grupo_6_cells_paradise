const usersService = require("../data/usersService");
const path = require("path");

const usersController = {
  login: (req, res) => {
    res.render(("./users/login"));
  },

  register: (req, res) => {
    res.render(("./users/registro"));
  },

  newUser: (req, res) => {
    req.body.image = req.file.filename;
    usersService.save(req.body); //, req.file
    res.redirect("./products");
  },

  getOne: (req,res)=>{
    res.render('./users/perfil', {user: usersService.getById(req.params.id)})
  }
};

module.exports = usersController;
