const productsModel = require("../model/products");

const mainController = {
  index: (req, res) => {
    res.render("./main/index", { celulares: productsModel.getBy("celular"), accesorios: productsModel.getBy("accesorio") });
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
