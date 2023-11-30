const express = require ('express');
const router = express.Router();
const usersController = require ('../controllers/usersController')

router.get('/', usersController.login)

router.get('/registro', usersController.registro)

router.get ('/:id', usersController.getOne)

module.exports = router;