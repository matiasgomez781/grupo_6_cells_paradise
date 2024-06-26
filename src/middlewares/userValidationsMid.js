const { body, validationResult } = require("express-validator");
const usersService = require("../data/usersService");

const userValidationMid = {
  registerUser: [
    body("first_name")
      .notEmpty()
      .withMessage("Nombre obligatorio")
      .isLength({ min: 2 })
      .withMessage("Debe tener al menos 2 caracteres"),
    body("last_name")
      .notEmpty()
      .withMessage("Apellido obligatorio")
      .isLength({ min: 2 })
      .withMessage("Debe tener al menos 2 caracteres"),
    body("email")
      .notEmpty()
      .withMessage("Email obligatorio")
      .isEmail()
      .withMessage("Email inválido")
      .custom(async (value) => {
        const usuarioExistente = await usersService.findByField("email", value);
        if (usuarioExistente) {
          throw new Error("El email ya está registrado");
        }
      }),
    body("password")
      .notEmpty()
      .withMessage("Contraseña obligatoria")
      .isLength({ min: 8 })
      .withMessage("Debe tener al menos 8 caracteres"),
    body("avatar").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Imagen obligatoria");
      }
      const extensionesPermitidas = ["jpg", "jpeg", "png", "gif"];
      const fileExtension = req.file.originalname
        .split(".")
        .pop()
        .toLowerCase();
      if (!extensionesPermitidas.includes(fileExtension)) {
        throw new Error("El formato de imagen no es válido, debe ser jpg, jpeg, png o gif");
      }
      return true;
    }),
  ],

  loginUser: [
    body("email")
      .notEmpty()
      .withMessage("Email obligatorio")
      .isEmail()
      .withMessage("Email inválido"),
    body("password").notEmpty().withMessage("Contraseña obligatoria"),
  ],

  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
};

module.exports = userValidationMid;
