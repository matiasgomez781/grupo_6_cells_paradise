const path = require('path');
const { check } = require('express-validator');

const emailValidation= [
	check('email')
		.notEmpty().withMessage('Ingrese su correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
];

module.exports = emailValidation;