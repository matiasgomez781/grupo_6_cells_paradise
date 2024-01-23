const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();

const usersRouter = require("./routes/users.routes");
const mainRouter = require("./routes/main.routes");
const productsRouter = require("./routes/products.routes");
const loginMid = require("./middlewares/loginMid");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({ secret: "Secret message" }));
app.use(cookieParser());
app.use(loginMid);

app.listen(3000, () => console.log("listening on port 3000"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

/*app.post('/users/login', (req, res) => {
    res.render(("users/login"));
  });*/

//Error 404

/*app.use((req,res, next) => {
    res.status(404).render("./main/error-404");
})*/
