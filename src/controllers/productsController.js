const path = require("path");

const productsController = {
  detail: (req, res) => {
    res.render("./products/productDetail");
  },

  createProduct: (req,res) => {
    res.render("./products/createProduct")
  }
};

module.exports = productsController;
