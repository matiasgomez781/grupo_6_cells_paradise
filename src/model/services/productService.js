const db = require("../database/models");

module.exports = {
  getAll: async function () {
    try {
      return await db.Product.findAll({
        include: ["images", "brand", "colors", "stock"],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getOne: async function (id) {
    try {
      return await db.Product.findByPk(id, {
        include: ["images", "brand", "colors", "stock"],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getCategories: async function () {
    try {
      return await db.Category.findAll({
        include: ["products"],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getBrands: async function () {
    try {
      return await db.Brand.findAll({
        include: ["products"],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getColors: async function () {
    try {
      return await db.Color.findAll({
        include: ["products"],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getImages: async function () {
    try {
      return await db.Image.findAll({
        include: ["product"],
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  // Construir un array para poder trabajar con las imágenes
  imagesConverter: (files) => {
    let images = [];

    files.forEach((img) => {
      images.push({ filename: img.filename });
    });

    return images;
  },

  save: async function ({
    name,
    price,
    description,
    discount,
    category,
    brand,
    images,
    colors,
  }) {
    try {
      // Guardar el producto creado en la base de datos
      let productCreated = await db.Product.create(
        new Product(name, price, description, discount, category, brand)
      );

      // Por cada imagen que exista, asociarlas con el producto
      images.forEach(async (img) => {
        await db.Image.create({
          url: img.filename,
          id_product: productCreated.id,
        });
      });

      // Asociar el o los colores elegidos con el producto
      // Primero identificar si se ha elegido más de un color
      if (colors.length > 1) {
        // Cuando sea más de uno, es un array. Hay que asociar a cada color
        colors.forEach(async (color) => {
          await db.ProductColor.create({
            id_color: color,
            id_product: productCreated.id,
          });
        });
      } else {
        // Cuando se elige un solo color se lo asocia directamente
        await db.ProductColor.create({
          id_color: colors,
          id_product: productCreated.id,
        });
      }
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  update: async function (
    { name, price, description, discount, category, brand, images, colors },
    idProduct
  ) {
    try {
      if (images.length) {
        images.forEach(async (img) => {
          await db.Image.update(
            {
              url: img.filename,
            },
            {
              where: {
                id_product: idProduct,
              },
            }
          );
        });
      }

      let colorRelated = await db.ProductColor.findAll({
        where: {
          id_product: idProduct,
        },
      });
      console.log("COLOR RELATEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD ");
      console.log(colorRelated);

      if (colors && colors.length) {
        colors.map(async (col) => {
          if (colorRelated.length) {
            let colorExists = false;
            for (let i = 0; i < colorRelated.length; i++) {
              if (colorRelated[i].dataValues.id_color == col) {
                colorExists = true;
                break;
              }
            }
            if (!colorExists) {
              await db.ProductColor.create({
                id_color: col,
                id_product: idProduct,
              });
            }
          } else {
            await db.ProductColor.create({
              id_color: col,
              id_product: idProduct,
            });
          }
        });

        // Eliminar los colores que ya no están asociados
        colorRelated.map(async (color) => {
          if (!colors.includes(color.dataValues.id_color)) {
            await db.ProductColor.destroy({
              where: {
                id_color: color.dataValues.id_color,
                id_product: idProduct,
              },
            });
          }
        });
      }

      return await db.Product.update(
        {
          name,
          price,
          description,
          discount,
          category,
          brand,
        },
        {
          where: {
            id: idProduct,
          },
        }
      );
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  delete: async function (id) {
    try {
      await db.Image.destroy({
        where: {
          id_product: id,
        },
      });

      await db.ProductColor.destroy({
        where: {
          id_product: id,
        },
      });

      await db.Product.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },
};

function Product(name, price, description, discount, id_category, id_brand) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.discount = discount;
  this.id_category = id_category;
  this.id_brand = id_brand;
}
