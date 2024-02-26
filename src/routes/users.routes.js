const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsers");
const authMid = require("../middlewares/authMid");
const validationsRegister= require('../middlewares/validationRegMid');
const validationsLogin= require('../middlewares/validationLoginMid');

// Cambiar la ruta a /login
router.get("/login", authMid, usersController.login);
router.post('/login', validationsLogin,usersController.loginProcess);

router.post("/logout", usersController.logout);

router.get("/profile/:id", usersController.detail);

router.get("/register", authMid, usersController.register);
router.post("/", upload.single("avatar"), validationsRegister,usersController.newUser);


router.get('/edit/:id', usersController.edit);
router.post('/update/:id', usersController.update);

module.exports = router;
