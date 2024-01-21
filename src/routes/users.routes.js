const express = require ('express');
const router = express.Router();
const { check } = require('express-validator');
const usersController = require ('../controllers/usersController')
const upload = require("../middlewares/multerUsers");


router.get('/', usersController.login);
/*router.post('/users/login', [
check('email').isEmail().withMessage('Email invalido'),
check('password').isLength( {min: 8} ).withMessage('La contraseña debe tener al menos 8 caracteres')],
usersController.processLogin);*/
//un comentario
router.post('/login', usersController.loginProcess);

router.get('/perfil', usersController.obtenerPerfil);

router.get('/registro', usersController.register)
router.post("/", upload.single("image"), usersController.newUser);


router.get ('/:id', usersController.getOne)

module.exports = router;