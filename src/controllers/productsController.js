const path = require("path");

const productsController = {
  detail: (req, res) => {
    res.render("./products/productDetail");
  },

  createProduct: (req,res) => {
    res.render("./products/createProduct")
  },

  editProduct: (req,res) => {
    res.render("./products/editProduct")
  }
};

module.exports = productsController;
