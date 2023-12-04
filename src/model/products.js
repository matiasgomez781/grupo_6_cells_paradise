let id = 1;

const productsModel = {
  products: [
    {
      id: id++,
      name: "MOTOROLA E22",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit amet",
      price: 94445,
      discount: 10,
      image: "/images/Motorola E22.png",
      category: "celular",
    },
    {
      id: id++,
      name: "SAMSUNG S21",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit amet",
      price: 360000,
      discount: 5,
      image: "/images/Samsung S21.png",
      category: "celular",
    },
    {
      id: id++,
      name: "MOTO EDGE 30 NEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit amet",
      price: 222000,
      discount: 30,
      image: "/images/Moto EDGE 30 NEO.png",
      category: "celular",
    },
    {
      id: id++,
      name: "IPHONE 11 PRO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit amet",
      price: 1070000,
      discount: false,
      image: "/images/iPhone 11 PRO.png",
      category: "celular",
    },
    {
      id: id++,
      name: "SAMSUNG A54",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit amet",
      price: 340000,
      discount: false,
      image: "/images/Samsung A54.png",
      category: "celular",
    },
    {
      id: id++,
      name: "IPHONE SE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit amet",
      price: 750000,
      discount: 10,
      image: "/images/iPhone SE.png",
      category: "celular",
    },
    {
      id: id++,
      name: "APPLE WATCH SERIES 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit amet",
      price: 20000,
      discount: 10,
      image: "/images/Apple Watch Series 8.png",
      category: "accesorio",
    },
    {
      id: id++,
      name: "MEMORIA SD SANDISK 128GB ULTRA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit amet",
      price: 4700,
      discount: false,
      image: "/images/Sandisk 128GB.png",
      category: "accesorio",
    },
    {
      id: id++,
      name: "CARGADOR SAMSUNG",
      description:
        "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor sit amet",
      price: 11000,
      discount: false,
      image: "/images/Cargador Samsung.png",
      category: "accesorio",
    },
  ],

  getAll: function () {
    return this.products;
  },
  getById: function (id) {
    return this.products.find(product => product.id == id);
  },
};

module.exports = productsModel;
