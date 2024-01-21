const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "/users.json");

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
  findByField: function(field, text) {
    let allUsers = this.getAll();
    let userFound = allUsers.find(oneUser=> oneUser[field] === text);
    return userFound;
  }
};

module.exports = usersService;
