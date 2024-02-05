const usersService = require("../data/usersService");
const bcrypt = require("bcrypt");

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
    
    // auto login luego de guardar al nuevo usuario
    let createdUser = usersService.findByField("email", req.body.email); // obtengo los datos del usuario
    req.session.userLogged = createdUser; // creo una sesión de usuario
    res.cookie("rememberMe", createdUser.email, { maxAge: 3000000 }); // también creo una cookie (no era suficiente con la session)

    res.redirect(`/users/profile/${req.body.id}`);
  },

  getOne: (req, res) => {
    res.render("./users/perfil", {
      user: usersService.getById(req.params.id),
      userLogged: usersService.getById(
        req.session.userLogged ? req.session.userLogged.id : null
      ),
    });
  },

  loginProcess: (req, res) => {
    let userToLogin = usersService.findByField("email", req.body.email);

    if (userToLogin) {
      if (bcrypt.compareSync(req.body.password, userToLogin.password)) {
        //delete userToLogin.password; //Se elimina la contraseña por seguridad
        req.session.userLogged = userToLogin; //Se guarda en sesion los datos de usuario

        if (req.body.remember) {
          res.cookie("rememberMe", userToLogin.email, { maxAge: 3000000 });
        }

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
    res.clearCookie("rememberMe");
    return res.redirect("/");
  },
};

module.exports = usersController;
