module.exports = {
  getProducts: async (req, res) => {
    let query = "SELECT * FROM products;";

    console.log("Attempting to execute the query.");
    const client = await db.connect();
    await client.query(query, (error, result) => {
      if (error) {
        console.log("Error: " + error);
        res.redirect("/"); //if there's an error, redirect to home.
      }

      console.log("Converting database results to an array");
      var arr = [];
      for (var i = 0; i < result.rows.length; i++) {
        arr.push(result.rows[i]);
      }

      console.log("Passing the new array to our product view and rendering.");
      res.render("pages/products.ejs", {
        title: "This is the Product Page!",
        products: arr
      });
      client.release();
    });
  }
};
