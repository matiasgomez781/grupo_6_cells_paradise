const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const productsController = require("../controllers/productsController");
const productValidationMid = require("../middlewares/productValidationMid");
const adminMid = require("../middlewares/adminMid");

router.get("/", adminMid, productsController.all);

router.get("/detail/:id", productsController.detail);

router.get("/createProduct", adminMid, productsController.createProduct);
router.post(
  "/",
  adminMid,
  upload.array("images"),
  productValidationMid.createProduct,
  productValidationMid.validate,
  productsController.store
);

router.get("/:id/editProduct", adminMid, productsController.editProduct);
router.delete("/delete-img/:imgId", adminMid, productsController.deleteImg);
router.put(
  "/:id",
  adminMid,
  upload.array("images"),
  productValidationMid.editProduct,
  productValidationMid.validate,
  productsController.editUpdate
);

router.delete("/:id", adminMid, productsController.delete);
router.get("/:brand", productsController.filtrarPorMarca);

module.exports = router;
