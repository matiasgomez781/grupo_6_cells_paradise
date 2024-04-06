const productService = require("../model/services/productService");

async function obtenerMarcasMid(req, res, next) {
  try {
    const todasLasMarcas = await productService.getBrands();
    res.locals.marcas = todasLasMarcas;
  } catch (error) {
    console.log(error);
    return [];
  }

  next();
}
module.exports = obtenerMarcasMid;
