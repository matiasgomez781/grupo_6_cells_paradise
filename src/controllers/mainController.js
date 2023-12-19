const productsModel = require("../model/products");
const mainService = require("../data/mainService");

const mainController = {
  index: (req, res) => {
    res.render("./main/index", {
      celulares: productsModel.getBy("celular"),
      accesorios: productsModel.getBy("accesorio"),
    });
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

  search: (req, res) => {
    res.render("./main/search", {
      productSearched: mainService.search(req.query.keywords),
    });
  },
};

module.exports = mainController;
