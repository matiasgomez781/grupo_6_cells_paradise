const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require ('./routes/index.routes')


const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.listen(3000, () => console.log("listening on port 3000"));

app.use('/', indexRouter)