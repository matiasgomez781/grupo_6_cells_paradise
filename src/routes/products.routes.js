const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");

const productsController = require("../controllers/productsController");

const adminMid = require("../middlewares/adminMid");

router.get("/", productsController.all);

router.get("/detail/:id", productsController.detail);

router.get("/createProduct", adminMid, productsController.createProduct);
router.post("/", upload.array("images"), productsController.store);

router.get("/:id/editProduct", adminMid, productsController.editProduct);
router.put("/:id", upload.array("images"), productsController.editUpdate);

router.delete("/:id", productsController.delete);

module.exports = router;
