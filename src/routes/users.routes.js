const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsers");
const authMid = require("../middlewares/authMid");
const userValidationMid = require("../middlewares/userValidationsMid");

router.get("/login", authMid, usersController.login);
router.post(
  "/login",
  userValidationMid.loginUser,
  userValidationMid.validate,
  usersController.loginProcess
);

router.post("/logout", usersController.logout);

router.get("/profile/:id", usersController.detail);

router.get("/register", authMid, usersController.register);
router.post(
  "/",
  upload.single("avatar"),
  userValidationMid.registerUser,
  userValidationMid.validate,
  usersController.newUser
);

router.get("/edit/:id", usersController.edit);
router.put("/update/:id",upload.single("avatar"), usersController.update);

module.exports = router;
