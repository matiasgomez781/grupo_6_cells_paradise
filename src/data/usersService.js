const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "/users.json");
// const reWriteJson = function () {
//   fs.writeFileSync(
//     productsFilePath,
//     JSON.stringify(this.products),
//     "utf-8"
//   )
// }

const usersService = {
  users: JSON.parse(fs.readFileSync(usersFilePath, "utf-8")),

  getAll: function () {
    return this.users;
  },

  getById: function (id) {
    return this.users.find((user) => user.id == id);
  },

  save: function (user) {
    user.id = this.users[this.users.length - 1].id + 1;
    this.users.push(user);
    fs.writeFileSync(usersFilePath, JSON.stringify(this.users), "utf-8");
  },

  // update: function (product, idProduct) {
  //   let productToEdit = this.getById(idProduct);

  //   productToEdit.name = product.name;
  //   productToEdit.price = product.price;
  //   productToEdit.description = product.description;
  //   productToEdit.category = product.category;
  //   productToEdit.discount = product.discount;

  //   fs.writeFileSync(productsFilePath, JSON.stringify(this.products), "utf-8");
  // },

  // delete: function (id) {
  //   this.products = this.products.filter((product) => product.id != id);

  //   fs.writeFileSync(productsFilePath, JSON.stringify(this.products), "utf-8");
  // },
};

module.exports = usersService;
