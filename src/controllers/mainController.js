const mainService = require("../model/services/mainService");
const productService = require("../model/services/productService");

module.exports = {
  index: async (req, res) => {
    try {
      const todasLasMarcas = await productService.getBrands();
      let celulares = await mainService.getBy(1);
      let accesorios = await mainService.getBy(2);

      res.render("./main/index", {
        celulares,
        accesorios,
        todasLasMarcas,
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

  contacto: (req, res) => {
    res.render("./main/contacto");
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
