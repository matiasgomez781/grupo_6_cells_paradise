const usersService = require("../data/usersService");
const bcrypt = require("bcrypt");

const usersController = {
  login: (req, res) => {
    res.render("users/login");
  },

  register: (req, res) => {
    res.render("./users/registro");
  },

  newUser: async (req, res) => {
    try {
      req.body.avatar = req.file.filename;
      const newUser = await usersService.save(req.body); // Guarda el nuevo usuario en la base de datos
      
      // Auto login después de guardar al nuevo usuario
      req.session.userLogged = newUser; // Crea una sesión de usuario
      res.cookie("rememberMe", newUser.email, { maxAge: 3000000 }); // También crea una cookie

      res.redirect(`/users/profile/${newUser.id}`);
    } catch (error) {
      console.error("Error al crear nuevo usuario:", error);
      res.status(500).send("Error al crear nuevo usuario");
    }
  },

  getOne: async (req, res) => {
    try {
      const user = await usersService.getById(req.params.id); // Obtiene un usuario por su ID
      const userLogged = await usersService.getById(req.session.userLogged ? req.session.userLogged.id : null);
      
      res.render("./users/perfil", { user, userLogged });
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      res.status(500).send("Error al obtener usuario");
    }
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
