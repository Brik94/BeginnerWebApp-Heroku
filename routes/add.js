// Routing in this file will handle adding, updating, and deleting products.

module.exports = {
  addProductPage: async (req, res) => {
    res.render("pages/add.ejs", {
      title: "Add a new product"
    });
  },
  addProduct: async (req, res) => {
    let productName = req.body.candyName;
    let price = req.body.price;

    let insertQuery =
      "Insert into products (Name, Price, CREATE_DATE) values ('" +
      productName +
      "', " +
      price +
      ", current_timestamp);";

    console.log(insertQuery);

    const client = await db.connect();
    await client.query(insertQuery, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.redirect("products");
      client.release();
    });
  },
  editProduct: async (req, res) => {
    res.render("pages/index.ejs");
  },
  deleteProduct: async (req, res) => {
    res.render("pages/index.ejs");
  }
};
