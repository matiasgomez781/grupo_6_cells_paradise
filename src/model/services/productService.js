const fs = require("fs");
const path = require("path");
const db = require("../database/models");

// productos del archivo json
// const productsFilePath = path.join(__dirname, "/products.json");

module.exports = {
  // products: JSON.parse(fs.readFileSync(productsFilePath, "utf-8")),

  getAll: async function () {
    try {
      return await db.Product.findAll({
        include: [
          {
            association: "images",
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getOne: async function (id) {
    try {
      return await db.Product.findByPk(id, {
        include: [
          {
            association: "images",
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  save: async function (product) {
    try {
      return await db.Product.create(product);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  update: async function (product, idProduct) {
    try {
      let productToEdit = await this.getOne(idProduct);

      productToEdit.name = product.name;
      productToEdit.price = product.price;
      productToEdit.description = product.description;
      productToEdit.category = product.category;
      productToEdit.discount = product.discount;

      return await db.Product.update(productToEdit);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  delete: async function (id) {
    try {
      return await db.Product.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },
};
