
const express = require("express");
const path = require("path");
const app = express();
const userRouter = require ('./routes/users.routes')


const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.listen(3000, () => console.log("listening on port 3000"));

app.set ('view engine', 'ejs');

app.set ('views', path.join(__dirname, '/views/users'))

app.use(express.static('public'))

app.use('/users', userRouter)