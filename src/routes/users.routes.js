const express = require("express");
const router = express.Router();
const { body } = require('express-validator');
const usersService = require("../data/usersService");

const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsers");
const authMid = require("../middlewares/authMid");

router.get("/login", authMid, usersController.login);
router.post('/login', usersController.loginProcess);

router.post("/logout", usersController.logout);

router.get("/profile/:id", usersController.detail);

router.get("/register", authMid, usersController.register);
router.post("/", 
  upload.single("avatar"),
  [
    body('email').isEmail().withMessage('El email es inválido'),
    body('email').custom(async (value) => {
      const existingUser = await usersService.findByField('email', value);
      if (existingUser) {
        throw new Error('El email ya está registrado');
      }
      return true;
    }),
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
  ],
  usersController.newUser
);

router.get('/edit/:id', usersController.edit);
router.post('/update/:id', usersController.update);

module.exports = router;
