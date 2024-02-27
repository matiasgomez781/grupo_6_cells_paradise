// const productsModel = require("../model/products");
const mainService = require("../model/services/mainService");

module.exports = {
  index: async (req, res) => {
    try {
      let celulares = await mainService.getBy(1);
      let accesorios = await mainService.getBy(2);

      res.render("./main/index", {
        celulares,
        accesorios,
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
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

  search: async (req, res) => {
    try {
      let productSearched = await mainService.search(req.query.keywords);

      res.render("./main/search", {
        productSearched,
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },
};
