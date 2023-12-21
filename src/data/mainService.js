const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "/products.json");

const mainService = {
  products: JSON.parse(fs.readFileSync(productsFilePath, "utf-8")),

  search: function (aSearch) {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(aSearch.toLowerCase())
    );
  },
  getBy: function (category) {
    return this.products.filter((product) => product.category == category);
  }
};

module.exports = mainService;
