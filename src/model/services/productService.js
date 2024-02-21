const fs = require("fs");
const path = require("path");
const db = require("../database/models");

module.exports = {
  getAll: async function () {
    try {
      return await db.Product.findAll({
        include: ["images", "brand" /* "colors", "stock" */],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getOne: async function (id) {
    try {
      return await db.Product.findByPk(id, {
        include: ["images", "brand" /* "colors", "stock" */],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getCategories: async function () {
    try {
      return await db.Category.findAll();
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getBrands: async function () {
    try {
      return await db.Brand.findAll();
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getColors: async function () {
    try {
      return await db.Color.findAll();
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  save: async function ({
    name,
    price,
    description,
    discount,
    category,
    brand,
    images,
  }) {
    try {
      // Guardar el producto creado en la base de datos
      let productCreated = await db.Product.create(
        new Product(name, price, description, discount, category, brand)
      );

      // Por cada imagen que exista, asociarlas con el producto
      await images.forEach(img => {
        db.Image.create({
          url: img.filename,
          id_product: productCreated.id,
        });
      });
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

      return await db.Product.update(productToEdit, {
        where: {
          id: idProduct,
        },
      });
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

function Product(name, price, description, discount, id_category, id_brand) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.discount = discount;
  this.id_category = id_category;
  this.id_brand = id_brand;
}
