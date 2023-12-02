const path = require("path");

const productsController = {
  detail: (req, res) => {
    res.render("./products/productDetail");
  },
};

module.exports = productsController;
