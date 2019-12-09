module.exports = {
  getProducts: async (req, res) => {
    let query = "SELECT * FROM products;"; // query database to get all the products

    // execute query
    await db.connect();
    await db.query(query, (error, result) => {
      if (error) {
        res.redirect("/"); //if there's an error, redirect to home.
      }

      //Convert database results to an array.
      var arr = [];
      for (var i = 0; i < result.rows.length; i++) {
        arr.push(result.rows[i]);
      }

      //Pass the new array to our product view and render.
      res.render("pages/products.ejs", {
        title: "This is the Product Page!",
        products: arr
      });
    });
  }
};
