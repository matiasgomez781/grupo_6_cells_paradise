const usersService = require("../data/usersService");
const path = require("path");
const { validationResult } = require('express-validator');
const fs = require("fs");
const bcrypt = require("bcrypt");
let users = require("../data/users.json");

const usersController = {
  login: (req, res) => {
    res.render(("users/login"));
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
  },
  processLogin: function (req, res) {
    let errors = validationResult(req);
    let usuarioALoguearse;

    if (errors.isEmpty()) {
      let usersJSON = fs.readFileSync('users.json', 'utf8');
      let users;

      if (usersJSON === "") {
        users = [];
      } else {
        users = JSON.parse(usersJSON);
      }

      for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email) {
          if (bcrypt.compareSync(req.body.password, users[i].password)) {
            usuarioALoguearse = users[i];
            break;
          }
        }
      }

      if (usuarioALoguearse === undefined) {
        return res.render('users/login', { errors: [{ msg: 'Credenciales inválidas' }] });
      }

      req.session.usuarioLogueado = usuarioALoguearse;
      res.send("sucess");
    } else {
      return res.render('users/login', { errors: errors.array() });
    }
  }
};

module.exports = usersController;
