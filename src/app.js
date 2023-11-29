const express = require("express");
const path = require("path");
const routerlogin = require("./routes/users.routes");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => console.log("listening on port 3000"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

//Ruta Carrito
app.get("/productCart", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productCart.html"));
});
app.get ('/registro', (req,res) =>{
    res.sendFile ( path.resolve(__dirname, './views/registro.html'))
});

app.use("/login",routerlogin);

//Ruta Product detail
app.get('/detail', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/productDetail.html'));
});


