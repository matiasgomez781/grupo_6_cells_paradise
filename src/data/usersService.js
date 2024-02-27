const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require("../model/database/models"); // Importa el modelo de usuario definido con Sequelize

const usersFilePath = path.join(__dirname, "/users.json");

const usersService = {
  users: JSON.parse(fs.readFileSync(usersFilePath, "utf-8")),

  getAll: function () {
    return this.users;
  },

  /*getById: function (id) {
    return this.users.find((user) => user.id == id);
  },

  save: function (user) {
    user.admin = 0; //Crea el usuario con valor admin en 0 (NO ES ADMIN)
    user.id = this.users[this.users.length - 1].id + 1;
    user.password = bcrypt.hashSync(user.password, 10);
    delete user.passwordRepetir; // Eliminar el campo de repetición de contraseña (solo se lo usará con las validaciones)
    this.users.push(user);
    fs.writeFileSync(usersFilePath, JSON.stringify(this.users), "utf-8");
  },*/
  save: async (userData) => {
    try {
      // Agrega id_rol al objeto userData antes de guardar el usuario
      userData.id_rol = 1;
      // Crea un nuevo usuario en la base de datos utilizando el modelo User
      const newUser = await db.User.create(userData);
      return newUser; // Devuelve el usuario creado
    } catch (error) {
      throw new Error("Error al guardar el usuario: " + error.message);
    }
  },

  getById: async (userId) => {
    try {
      // Busca un usuario por su ID en la base de datos
      const user = await db.User.findByPk(userId);
      return user; // Devuelve el usuario encontrado
    } catch (error) {
      throw new Error("Error al obtener el usuario: " + error.message);
    }
  },

  update: async (userId, userData) => {
    try {
      await db.User.update(userData, { where: { id: userId } });
    } catch (error) {
      throw new Error("Error al actualizar el usuario en la base de datos: " + error.message);
    }
  },
  
  findByField: function (field, text) {
    let allUsers = this.getAll();
    let userFound = allUsers.find((oneUser) => oneUser[field] === text);
    return userFound;
  }
};

module.exports = usersService;
