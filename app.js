const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const { Pool } = require("pg");

//Uncomment to use online database.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
  //ssl: true
});

//Uncomment to use local database. Update the variables.
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "CandyStore",
//   password: "password"
// });

const { getProductPage } = require("./routes/products");
const { addProduct } = require("./routes/add");

pool.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
global.db = pool;

//configuration
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parses form data from the client
app.use(express.static(path.join(__dirname, "public")));

//routes for the web app
app.get("/", (req, res) => res.render("pages/index"));
app.get("/product", getProductPage);
app.get("/addProduct", async (req, res) => res.render("pages/add"));
app.post("/addProduct", addProduct);

app.listen(PORT, () => console.log(`Listening on https://${PORT}`));
