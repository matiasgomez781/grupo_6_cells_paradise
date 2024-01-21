const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsers");

// Cambiar la ruta a /login
router.get("/login", usersController.login);

router.get("/profile/:id", usersController.getOne);

router.get("/register", usersController.register);
router.post("/", upload.single("avatar"), usersController.newUser);

// router.get ('/:id', usersController.getOne)

module.exports = router;
