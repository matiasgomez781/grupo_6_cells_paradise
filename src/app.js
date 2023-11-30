const express = require("express");
const path = require("path");
const routerlogin = require("./routes/users.routes");


const app = express();

const mainRouter = require("./routes/main.routes");
const porductsRouter = require("./routes/products.routes");

app.use(express.static("public"));

app.listen(3000, () => console.log("listening on port 3000"));

app.use("/", mainRouter);

//Ruta Carrito
app.get("/productCart", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productCart.html"));
});
app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});

app.use("/login",routerlogin);


//Ruta Product detail
app.use("/detail", porductsRouter);
