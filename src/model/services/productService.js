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
      console.log(error);
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
      console.log(error);
      return [];
    }
  },

  save: function (product) {
    product.id = this.products[this.products.length - 1].id + 1;
    this.products.push(product);
    fs.writeFileSync(productsFilePath, JSON.stringify(this.products), "utf-8");
  },

  update: function (product, idProduct) {
    let productToEdit = this.getById(idProduct);

    productToEdit.name = product.name;
    productToEdit.price = product.price;
    productToEdit.description = product.description;
    productToEdit.category = product.category;
    productToEdit.discount = product.discount;

    fs.writeFileSync(productsFilePath, JSON.stringify(this.products), "utf-8");
  },

  delete: function (id) {
    this.products = this.products.filter((product) => product.id != id);

    fs.writeFileSync(productsFilePath, JSON.stringify(this.products), "utf-8");
  },
};
