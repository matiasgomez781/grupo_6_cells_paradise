const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//Ruta Raiz => Login
router.get ("/", usersController.login);


module.exports = router;