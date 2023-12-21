const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

const routerlogin = require("./routes/users.routes");
const mainRouter = require("./routes/main.routes");
const productsRouter = require("./routes/products.routes");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.listen(3000, () => console.log("listening on port 3000"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", mainRouter);
app.use("/users", routerlogin);
app.use("/products", productsRouter);
