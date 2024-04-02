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

  imagesCreate: async function (images, idProduct) {
    try {
      for (const img of images) {
        await db.Image.create({
          url: img.filename,
          id_product: idProduct,
        });
      }
      return "Imágenes creadas con éxito";
    } catch (error) {
      console.log(error.message);
      return [];
    }
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
      this.imagesCreate(images, productCreated.id);

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

  deleteImg: async function (imgId) {
    try {
      return await db.Image.destroy({
        where: {
          id: imgId,
        },
      });
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
        // fs.unlinkSync(
        //   path.join(
        //     __dirname,
        //     "/images/products",
        //     files.filename
        //   )
        // );

        this.imagesCreate(images, idProduct);
      }

      if (colors.length) {
        let colorRelated = await db.ProductColor.findAll({
          where: {
            id_product: idProduct,
          },
        });

        let colorExists = [];

        colorRelated.forEach((col) =>
          colorExists.push(col.dataValues.id_color)
        );

        let colorsToCreate = colors.filter((col) => {
          if (!colorExists.includes(parseInt(col))) {
            return col;
          }
        });

        for (let i = 0; i < colorExists.length; i++) {
          if (!colors.includes(colorExists[i].toString())) {
            await db.ProductColor.destroy({
              where: {
                id_color: colorExists[i],
                id_product: idProduct,
              },
            });
          }
        }

        for (let i = 0; i < colorsToCreate.length; i++) {
          await db.ProductColor.create({
            id_color: colorsToCreate[i],
            id_product: idProduct,
          });
        }
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
