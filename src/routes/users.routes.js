const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//Ruta Raiz => Login
router.get ("/login", usersController.login);
router.get ("/registro", usersController.register);


module.exports = router;