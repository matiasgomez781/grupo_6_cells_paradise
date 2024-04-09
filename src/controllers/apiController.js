const productService = require("../model/services/productService");
const userService = require("../data/usersService");

module.exports = {
  users: async (req, res) => {
    try {
      let users = await userService.getAll();

      res.status(200).json(users);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  userDetail: async (req, res) => {
    try {
      let user = await userService.getById(req.params.id);

      res.status(200).json(user);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  products: async (req, res) => {
    try {
      let products = await productService.getAll();

      res.status(200).json(products);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  productDetail: async (req, res) => {
    try {
      let product = await productService.getOne(req.params.id);

      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  brands: async (req, res) => {
    try {
      let brands = await productService.getBrands();

      res.status(200).json(brands);
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  categories: async (req, res) => {
    try {
      let categories = await productService.getCategories();

      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};
