const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.all)

router.get("/detail/:id", productsController.detail);

router.get("/createProduct", productsController.createProduct);

router.get("/editProduct", productsController.editProduct);


module.exports = router;
