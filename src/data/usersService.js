const bcrypt = require("bcryptjs");
const db = require("../model/database/models"); // Importa el modelo de usuario definido con Sequelize

const usersService = {
  getAll: async () => {
    try {
      return await db.User.findAll(/* {
        include: ["role", "addresses", "carts", "purchases"],
      } */);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  save: async (userData) => {
    try {
      userData.id_rol = 2; // Agrega id_rol al objeto userData antes de guardar el usuario
      //Rol 1 es admin, Rol 2 es usuario invitado
      userData.password = bcrypt.hashSync(userData.password, 10); // Hashear la contraseña
      const newUser = await db.User.create(userData); // Crea un nuevo usuario en la base de datos utilizando el modelo User
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
      throw new Error(
        "Error al actualizar el usuario en la base de datos: " + error.message
      );
    }
  },

  findByField: async function (field, email) {
    try {
      let userFound = await db.User.findOne({ where: { email } });
      return userFound;
    } catch (error) {
      throw new Error("Error al buscar usuario por campo" + error.message);
    }
  },

  deleteById: async (userId) => {
    try {
      const deletedUser = await db.User.destroy({ where: { id: userId } });
      return deletedUser === 1;
    } catch (error) {
      throw new Error("Error al eliminar el usuario: " + error.message);
    }
  },
  
};

module.exports = usersService;
