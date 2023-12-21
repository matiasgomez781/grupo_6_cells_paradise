const productService = require("../data/productService");

const productsController = {
  // Vista de todos los productos
  all: (req, res) => {
    res.render("./products/index", { products: productService.getAll() });
  },

  // Vista del detalle de producto
  detail: (req, res) => {
    res.render("./products/productDetail", {
      product: productService.getById(req.params.id),
      products: productService.getAll(),
    });
  },

  // Formulario de creación
  createProduct: (req, res) => {
    res.render("./products/createProduct");
  },
  // Método para guardar el producto nuevo
  store: (req, res) => {
    req.body.image = req.file.filename;
    productService.save(req.body); //, req.file
    res.redirect("./products");
  },

  // Formulario de edición
  editProduct: (req, res) => {
    res.render("./products/editProduct", {
      product: productService.getById(req.params.id),
    });
  },
  // Método para modificar el producto
  editUpdate: (req, res) => {
    productService.update(req.body, req.params.id);
    res.redirect(`/products/detail/${req.params.id}`);
  },
  delete: (req, res) => {
    productService.delete(req.params.id);
    res.redirect(`/products`);
  }
};

module.exports = productsController;
