const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const productsController = require("../controllers/productsController");
const productValidationMid = require("../middlewares/productValidationMid");
const adminMid = require("../middlewares/adminMid");

router.get("/", productsController.all);
router.get("/detail/:id", productsController.detail);

router.get("/createProduct", adminMid, productsController.createProduct);
router.post(
  "/",
  adminMid,
  upload.array("images"),
  productValidationMid.createProduct,
  productsController.store
);

router.get("/:id/editProduct", adminMid, productsController.editProduct);
router.put(
  "/:id",
  adminMid,
  upload.array("images"),
  productsController.editUpdate
);

router.delete("/:id", adminMid, productsController.delete);

module.exports = router;
