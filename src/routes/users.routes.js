const express = require ('express');
const router = express.Router();
const usersController = require ('../controllers/usersController')
const upload = require("../middlewares/multerUsers");


router.get('/', usersController.login)

router.get('/perfil/:id', usersController.getOne)

router.get('/registro', usersController.register)
router.post("/", upload.single("image"), usersController.newUser);


router.get ('/:id', usersController.getOne)

module.exports = router;