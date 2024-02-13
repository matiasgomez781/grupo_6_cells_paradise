const productService = require("../model/services/productService");
const usersService = require("../data/usersService");

module.exports = {
  // Vista de todos los productos
  all: async (req, res) => {
    try {
      let products = await productService.getAll();
      return res.render("./products/index", { products });
    } catch (error) {
      console.log(error);
      throw new Error("No hay productos disponibles para mostrar.");
    }
  },

  // Vista del detalle de producto
  detail: (req, res) => {
    res.render("./products/productDetail", {
      product: productService.getOne(req.params.id),
      products: productService.getAll(),
      user: usersService.getById(
        req.session.userLogged ? req.session.userLogged.id : null
      ),
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
  },
};
