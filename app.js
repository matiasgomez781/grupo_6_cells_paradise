const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.listen(3000, () => console.log("listening on port 3000"));

//Ruta Product detail
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/productDetail.html'));
});