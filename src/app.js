const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();

const indexRouter = require("./routes/index.routes");
const loginMid = require("./middlewares/loginMid");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(
  session({
    secret: "Mensaje secreto", // Esto debería ser un valor único y seguro en un entorno de producción
    resave: false, // Evita que la sesión se guarde en el almacenamiento si no hay cambios
    saveUninitialized: false, // Evita guardar sesiones que aún no se han inicializado
  })
);
app.use(cookieParser());
app.use(loginMid);

// Config de cors sin dependencia
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.listen(3000, () => console.log("listening on port 3000"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", indexRouter);

//Error 404

app.use((req, res, next) => {
  res.status(404).render("./main/error-404");
});
