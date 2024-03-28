const { body, validationResult } = require("express-validator");

const productValidationMid = {
  createProduct: [
    body("name")
      .notEmpty()
      .withMessage("Nombre obligatorio")
      .isLength({ min: 5 })
      .withMessage("Debe tener al menos 5 caracteres"),
    body("description")
      .notEmpty()
      .withMessage("Descripción obligatoria")
      .isLength({ min: 20 })
      .withMessage("Debe tener al menos 20 caracteres"),
    body("price")
      .notEmpty()
      .withMessage("Precio obligatorio")
      .isNumeric()
      .withMessage("Precio debe ser numérico"),
    body("discount")
      .notEmpty()
      .withMessage("Descuento obligatorio")
      .isNumeric()
      .withMessage("Descuento debe ser numérico (si no tiene descuento puede ser 0)"),
    body("category").notEmpty().withMessage("Categoría obligatoria"),
    body("brand").notEmpty().withMessage("Marca obligatoria"),
    body("images.*").custom((value, { req }) => {
      const extensionesPermitidas = ["jpg", "jpeg", "png", "gif"];
      const fileExtension = value.originalname.split(".").pop().toLowerCase();
      if (!extensionesPermitidas.includes(fileExtension)) {
        throw new Error("Formato de imagen no válido");
      }
      return true;
    }),
  ],

  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
};

module.exports = productValidationMid;
