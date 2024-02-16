const productService = require("../model/services/productService");
const usersService = require("../data/usersService");

module.exports = {
  // Vista de todos los productos
  all: async (req, res) => {
    try {
      let products = await productService.getAll();
      return res.render("./products/index", { products });
    } catch (error) {
      console.log(error.message);
      throw new Error("No hay productos disponibles para mostrar.");
    }
  },

  // Vista del detalle de producto
  detail: async (req, res) => {
    try {
      let product = await productService.getOne(req.params.id);

      let products = await productService.getAll();

      let user = await usersService.getById(
        req.session.userLogged ? req.session.userLogged.id : null
      );

      return res.render("./products/productDetail", {
        product,
        products,
        user,
      });
    } catch (error) {
      console.log(error.message);
      throw new Error("No se pudo obtener el detalle de este producto.");
    }
  },

  // Formulario de creación
  createProduct: (req, res) => {
    res.render("./products/createProduct");
  },
  // Método para guardar el producto nuevo
  store: async (req, res) => {
    try {
      req.body.image = req.file.filename;
      await productService.save(req.body); //, req.file
      res.redirect("./products");
    } catch (error) {
      console.log(error.message);
      throw new Error("No se pudo crear el producto.");
    }
  },

  // Formulario de edición
  editProduct: async (req, res) => {
    try {
      let product = await productService.getOne(req.params.id);

      return res.render("./products/editProduct", { product });
    } catch (error) {
      console.log(error.message);
      throw new Error("No se pudo obtener el detalle de este producto.");
    }
  },
  // Método para modificar el producto
  editUpdate: async (req, res) => {
    try {
      await productService.update(req.body, req.params.id);
      return res.redirect(`/products/detail/${req.params.id}`);
    } catch (error) {
      console.log(error.message);
      throw new Error("Error al actualizar el producto.");
    }
  },
  delete: (req, res) => {
    productService.delete(req.params.id);
    res.redirect(`/products`);
  },
};
