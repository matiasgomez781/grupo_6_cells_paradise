const productsModel = require("../model/products");

const productsController = {
  detail: (req, res) => {
    res.render("./products/productDetail", {
      product: productsModel.getById(req.params.id),
      products: productsModel.getAll(),
    });
  },
};

module.exports = productsController;
