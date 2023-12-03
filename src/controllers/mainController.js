const productsModel = require("../model/products");

const mainController = {
  index: (req, res) => {
    res.render("./main/index", { products: productsModel.getAll() });
  },

  cart: (req, res) => {
    res.render("./main/productCart");
  },
};

module.exports = mainController;
