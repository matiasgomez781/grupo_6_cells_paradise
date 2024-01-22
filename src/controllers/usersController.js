const usersService = require("../data/usersService");
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
    req.body.avatar = req.file.filename;
    usersService.save(req.body); //, req.file
    res.redirect(`/users/profile/${req.body.id}`);
  },

  getOne: (req, res) => {
    res.render("./users/perfil", { user: usersService.getById(req.params.id) });
  },
  /*getProfile: (req, res) => {
    res.render("users/perfil", {user: usersService.findByField("id", req.session.userLogged.id)});
  },*/
  
  loginProcess: (req, res) => {
    let userToLogin = usersService.findByField("email", req.body.email);

    if (userToLogin) {
      if (bcrypt.compareSync(req.body.password, userToLogin.password)) {
        
        //delete userToLogin.password; //Se elimina la contraseña por seguridad
        req.session.userLogged = userToLogin; //Se guarda en sesion los datos de usuario

        return res.redirect("/users/profile/" + userToLogin.id);
      } else {
        return res.render("users/login", {
          errors: { 
            email: { msg: "Credenciales invalidas" },
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
  logout: (req, res) => {
    req.session.userLogged = "";
    //res.clearCookie("");
    return res.redirect("/");
  }
};

module.exports = usersController;
