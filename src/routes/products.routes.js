const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.all);

router.get("/detail/:id", productsController.detail);

router.get("/createProduct", productsController.createProduct);
router.post("/products");

router.get("/:id/editProduct", productsController.editProduct);
router.put("/products/:id");

router.delete("/products/:id");

module.exports = router;
