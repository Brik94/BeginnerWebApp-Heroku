const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const { Pool } = require("pg");

//Uncomment to use online database.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

//Uncomment to use local database. Update the variables with your user/password.
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "CandyStore",
//   password: "password"
// });

global.db = pool;

const { getProducts } = require("./routes/products");
const {
  addProductPage,
  addProduct,
  editProduct,
  deleteProduct
} = require("./routes/add");

//configuration
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parses form data from the client
app.use(express.static(path.join(__dirname, "public")));

//routes for the web app
app.get("/", (req, res) => res.render("pages/index"));
app.get("/products", getProducts);
app.get("/edit/:id", editProduct);
app.get("/delete/:id", deleteProduct);
app.get("/addProduct", addProductPage);
app.post("/addProduct", addProduct);

app.listen(PORT, () => console.log(`Listening on https://localhost:${PORT}`));
