const productService = require("../data/productService");
const productsModel = require("../model/products");

const productsController = {
  all: (req, res) => {
    res.render("./products/index", {products: productService.getAll()});
  },

  detail: (req, res) => {
    res.render("./products/productDetail", {
      product: productService.getById(req.params.id),
      products: productService.getAll(),
    });
  },

  createProduct: (req,res) => {
    res.render("./products/createProduct")
  },

  store: (req,res) => {
    req.body.image = req.file.filename;
		productService.save(req.body);  //, req.file
		res.redirect ("./products")
  } ,

  editProduct: (req,res) => {
    res.render("./products/editProduct")
  }
};

module.exports = productsController;
