const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsers");
const authMid = require("../middlewares/authMid");

// Cambiar la ruta a /login
router.get("/login", authMid, usersController.login);
router.post('/login', usersController.loginProcess);

router.post("/logout", usersController.logout);

//router.get('/profile/:id', usersController.getProfile);
router.get("/profile/:id", usersController.getOne);

router.get("/register", authMid, usersController.register);
router.post("/", upload.single("avatar"), usersController.newUser);

// router.get ('/:id', usersController.getOne)

router.get('/edit/:id', usersController.edit);
router.post('/update/:id', usersController.update);

module.exports = router;
