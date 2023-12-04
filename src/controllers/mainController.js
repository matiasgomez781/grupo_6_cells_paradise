const productsModel = require("../model/products");

const mainController = {
  index: (req, res) => {
    res.render("./main/index", { products: productsModel.getAll() });
  },

  cart: (req, res) => {
    res.render("./main/productCart");
  },

  about: (req, res) => {
    res.render("./main/about");
  },

  trabaja: (req, res) => {
    res.render("./main/trabaja");
  },
};

module.exports = mainController;
