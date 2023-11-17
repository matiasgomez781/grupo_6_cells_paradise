const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.listen(3000, () => console.log("listening on port 3000"));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));

//Ruta Carrito
app.get('/productCart', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/productCart.html'));
});

app.get("/loggin", (req, res) => {
    res.sendFile(path.resolve("./views/loggin.html"));
});

app.get ('/registro', (req,res) =>{
    res.sendFile ( path.resolve(__dirname, './views/registro.html'))
});
