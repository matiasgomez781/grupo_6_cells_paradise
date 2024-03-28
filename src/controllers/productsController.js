const productService = require("../model/services/productService");
const usersService = require("../data/usersService");
const { validationResult } = require("express-validator");

module.exports = {
  // Vista de todos los productos
  all: async (req, res) => {
    try {
      let products = await productService.getAll();
      return res.render("./products/index", { products });
    } catch (error) {
      console.log(error.message);
      return [];
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
      return [];
    }
  },

  // Formulario de creación
  createProduct: async (req, res) => {
    try {
      let categories = await productService.getCategories();
      let brands = await productService.getBrands();
      let colors = await productService.getColors();

      return res.render("./products/createProduct", {
        categories,
        brands,
        colors,
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  // Método para guardar el producto nuevo
  store: async (req, res) => {
    try {
      // Creo un array para poder guardar las diferentes imágenes del producto
      req.body.images = productService.imagesConverter(req.files);

      // Manejar errores de validación
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      await productService.save(req.body); //, req.file
      return res.redirect("/products");
    } catch (error) {
      console.log(error.message);
      return res.status(500).send("Error interno del servidor");
    }
  },

  // Formulario de edición
  editProduct: async (req, res) => {
    try {
      let product = await productService.getOne(req.params.id);
      let colors = await productService.getColors();
      let images = await productService.getImages();
      let brands = await productService.getBrands();
      let categories = await productService.getCategories();

      return res.render("./products/editProduct", {
        product,
        colors,
        images,
        brands,
        categories,
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },
  // Método para modificar el producto
  editUpdate: async (req, res) => {
    try {
      // Creo un array para poder agregar nuevas imágenes al producto
      req.body.images = productService.imagesConverter(req.files);

      if (req.body.colors) {
        req.body.colors = [...req.body.colors];
      }

      await productService.update(req.body, req.params.id, req.files);

      return res.redirect(`/products/detail/${req.params.id}`);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },
  delete: async (req, res) => {
    try {
      await productService.delete(req.params.id);

      // console.log(req);
      // fs.unlinkSync(
      //   path.join(
      //     __dirname,
      //     "../../public/images/products/",
      //     req.files.filename
      //   )
      // );
      return res.redirect(`/products`);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  filtrarPorMarca: async (req,res) => {
    try {
      const marca = req.params.brand;
      const products = await productService.obtenerProductosPorMarca(marca);

      return res.render("./products/productosFiltrados", {products});

      
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }
};
