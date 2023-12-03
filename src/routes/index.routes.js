const express = require ('express');
const router = express.Router();
const routerUser = require ('./users.routes');

router.use('/usuarios', routerUser)

module.exports = router;