const { Op } = require("sequelize");
const db = require("../database/models");

module.exports = {
  search: async function (aSearch) {
    try {
      return await db.Product.findAll({
        where: {
          name: { [Op.like]: "%" + aSearch + "%" },
        },
        include: ["images", "brand", "colors", "stock"],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getBy: async function (idCategory) {
    try {
      return await db.Product.findAll({
        where: {
          id_category: idCategory,
        },
        include: ["images", "brand", "colors", "stock"],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },
};
