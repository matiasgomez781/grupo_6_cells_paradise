<<<<<<< HEAD
const express = require ('express');
const router = express.Router();
const usersController = require ('../controllers/usersController')

router.get('/', usersController.login)

router.get('/registro', usersController.registro)

router.get ('/:id', usersController.getOne)
=======
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

//Ruta Raiz => Login
router.get ("/login", usersController.login);
router.get ("/registro", usersController.register);

>>>>>>> 10bbbab13731c6299bf19fa4327f8302b6fd734d

module.exports = router;