var express = require("express");
const app = express();

//const fileUpload = require("express-fileupload");
var path = require("path");
var http = require("http").Server(app);
//var validator = require("express-validator");
//const mongoose = require("mongoose");
//const passport = require("passport");
// import controller
//require("./model");
//require("./service/passport");
//var AuthController = require("./controllers/AuthController");
//var keys = require("./config/keys");

//var session = require("express-session");
//var bodyParser = require("body-parser");
//var flash = require("connect-flash");
//var i18n = require("i18n-express");

//const cookieSession = require("cookie-session");

// test env rules
// if (process.env.NODE_ENV !== "test") {
//   mongoose
//     .connect(keys.mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("Connection successful");
//     })
//     .catch((error) => {
//       console.error("Error: Failed to connect to database.", error);
//     });
// }

app.use(express.json());

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

app.use(
  express.urlencoded({
    extended: false,
  })
);

// app.use(
//   fileUpload({
//     createParentPath: true,
//   })
// );

// import Router file
//var pageRouter = require("./routers/route");

// app.use(
//   session({ resave: false, saveUninitialized: true, secret: "nodedemo" })
// );
// app.use(flash());
// app.use(
//   i18n({
//     translationsPath: path.join(__dirname, "i18n"), // <--- use here. Specify translations files path.
//     siteLangs: ["es", "en", "de", "ru", "it", "fr"],
//     textsVarName: "translation",
//   })
// );

app.use("/public", express.static("public"));

// app.get("/layouts/", function (req, res) {
//   res.render("view");
// });

// apply controller
//AuthController(app);

//For set layouts of html view
//var expressLayouts = require("express-ejs-layouts");
//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//app.use(expressLayouts);

// Define All Route
//pageRouter(app);

app.get("/", function (req, res) {
  res.redirect("/");
});

const PORT = process.env.PORT || 5000;

http.listen(PORT, function () {
  console.log("listening on " + PORT);
});
