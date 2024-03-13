const express = require("express");
const router = express.Router();
const usersService = require("../data/usersService");
const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsers");
const authMid = require("../middlewares/authMid");
const validator = require("../middlewares/userValidationsMid");

router.get("/login", authMid, usersController.login);
router.post('/login', validator.loginUser, validator.validate, usersController.loginProcess);

router.post("/logout", usersController.logout);

router.get("/profile/:id", usersController.detail);

router.get("/register", authMid, usersController.register);
router.post("/", 
  upload.single("avatar"),
  validator.registerUser,
  validator.validate,
  usersController.newUser
);

router.get('/edit/:id', usersController.edit);
router.post('/update/:id', usersController.update);

module.exports = router;
