const productsModel = require("../model/products");

const productsController = {
  detail: (req, res) => {
    res.render("./products/productDetail", {
      product: productsModel.getById(req.params.id),
      products: productsModel.getAll(),
    });
  },

  createProduct: (req,res) => {
    res.render("./products/createProduct")
  },

  editProduct: (req,res) => {
    res.render("./products/editProduct")
  }
};

module.exports = productsController;
