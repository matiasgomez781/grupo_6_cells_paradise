const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");

const productsController = require("../controllers/productsController");

router.get("/", productsController.all);

router.get("/detail/:id", productsController.detail);

router.get("/createProduct", productsController.createProduct);
router.post("/", upload.single("image"), productsController.store);

router.get("/:id/editProduct", productsController.editProduct);
router.put("/:id", productsController.editUpdate);

router.delete("/:id", productsController.delete);

module.exports = router;
