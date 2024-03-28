const usersRouter = require("./users.routes");
const productsRouter = require("./products.routes");
const mainRouter = require("./main.routes");
const api = require("./api.routes");

const express = require("express");
const routes = express.Router();

routes.use("/", mainRouter);
routes.use("/products", productsRouter);
routes.use("/users", usersRouter);
routes.use("/api", api);

module.exports = routes;
