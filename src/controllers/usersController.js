const usersService = require("../data/usersService");
const path = require("path");
const { validationResult } = require("express-validator");
const fs = require("fs");
const bcrypt = require("bcrypt");
let users = require("../data/users.json");

const usersController = {
  login: (req, res) => {
    res.render("users/login");
  },

  register: (req, res) => {
    res.render("./users/registro");
  },

  newUser: (req, res) => {
    req.body.image = req.file.filename;
    usersService.save(req.body); //, req.file
    res.redirect("./products");
  },

  getOne: (req, res) => {
    res.render("./users/perfil", { user: usersService.getById(req.params.id) });
  },
  obtenerPerfil: (req, res) => {
    res.render("users/perfil", {user: usersService.findByField(this.email, req.body.email)});
  },
  loginProcess: (req, res) => {
    let userToLogin = usersService.findByField("email", req.body.email);

    if (userToLogin) {
      if (userToLogin.password == req.body.password) {
        return res.redirect("perfil");
      } else {
        return res.render("users/login", {
          errors: { 
            email: { msg: "Contraseña invalida" },
          },
        });
      }
    }

    return res.render("users/login", {
      errors: {
        email: { msg: "No se encuentra este email en nuestra base de datos" },
      },
    });
  },
};

module.exports = usersController;
