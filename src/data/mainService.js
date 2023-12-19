const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");

const mainService = {
  products: JSON.parse(fs.readFileSync(productsFilePath, "utf-8")),

  search: function (aSearch) {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(aSearch.toLowerCase())
    );
  },
};

module.exports = mainService;
