const path = require("path");

const usersController = {
  login: (req, res) => {
    res.render(("./users/login"));
  },

  register: (req, res) => {
    res.render(("./users/registro"));
  },
  getOne: (req,res)=>{
    res.send('pagina del user' + req.params.id)
  }
};

module.exports = usersController;
