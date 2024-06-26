const usersService = require("../data/usersService");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const usersController = {
  login: (req, res) => {
    res.render("users/login");
  },

  register: (req, res) => {
    res.render("./users/registro");
  },

  newUser: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("./users/registro", { errors: errors.array() }); // Renderiza nuevamente el formulario de registro con los errores
      }

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
  detail: async (req, res) => {
    try {
      const user = await usersService.getById(req.params.id); // Obtiene un usuario por su ID
      const userLogged = await usersService.getById(
        req.session.userLogged ? req.session.userLogged.id : null
      );

      res.render("./users/perfil", { user, userLogged });
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      res.status(500).send("Error al obtener usuario");
    }
  },

  // Método para mostrar el formulario de edición de usuario
  edit: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await usersService.getById(userId);
      res.render("users/editUser", { user });
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      res.status(500).send("Error al obtener usuario");
    }
  },

  // Método para manejar la actualización del usuario
  update: async (req, res) => {
    try {
      req.body.avatar = req.file.filename;
      const userId = req.params.id;
      const updatedUserData = req.body;
      await usersService.update(userId, updatedUserData);
      res.clearCookie("rememberMe");
      res.redirect(`/users/profile/${userId}`);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      res.status(500).send("Error al actualizar usuario");
    
    }
  },

  loginProcess: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("users/login", { errors: errors.array() }); // Renderiza nuevamente el formulario de login con los errores
      }

      let userToLogin = await usersService.findByField("email", req.body.email);

      if (userToLogin) {
        if (bcrypt.compareSync(req.body.password, userToLogin.password)) {
          req.session.userLogged = userToLogin; //Se guarda en sesion los datos de usuario

          if (req.body.remember) {
            res.cookie("rememberMe", userToLogin.email, { maxAge: 3000000 });
          }

          return res.redirect("/users/profile/" + userToLogin.id);
        } else {
          return res.render("users/login", {
            errors: {
              email: { msg: "Credenciales inválidas" },
            },
          });
        }
      }

      return res.render("users/login", {
        errors: {
          email: { msg: "No se encuentra este email en nuestra base de datos" },
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error en el proceso de inicio de sesión");
    }
  },
  logout: (req, res) => {
    req.session.userLogged = "";
    res.clearCookie("rememberMe");
    return res.redirect("/");
  },

  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;

      res.clearCookie("rememberMe");
      req.session.destroy();
      const userDeleted = await usersService.deleteById(userId);
      await res.redirect('/');
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      res.status(500).send("Error al eliminar usuario");
    }
  },
  
};

module.exports = usersController;
