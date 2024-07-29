const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});
app.get("/api/products", (req, res) => {
  const newProduct = products.map((ele) => {
    const { id, name, image } = ele;
    return { id, name, image }; //selecting some attributes from array in api
  });
  res.send(newProduct);
});

// values after : are placeholder for params
app.get("/api/products/:neededProductId", (req, res) => {
  // console.log(req.params);

  //this sets up params dynamically
  const { neededProductId } = req.params;
  const singleProduct = products.find(
    //make it number as req.params is a string
    (ele) => ele.id === Number(neededProductId)
  );
  if (!singleProduct) {
    return res.status(404).send("<h1>products id doesnot exist</h1>");
  }
  res.send(singleProduct);
});

//query string/url parameters
//send small amount of data to the server using url
app.get("/api/v1/query", (req, res) => {
  //if we add ? after query in url in key value pair it is added to req.query object and we can access them and do stuff
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((ele) => {
      return ele.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  //if we set up a condition use return statement as js will continue to look further code and express gets confused as it cant send 2 responses in one request

  if (sortedProducts.length < 1) {
    return res.status(200).send("no such item found");
  }
  return res.status(200).json(sortedProducts);
});
//listens
app.listen(5000, () => {
  console.log("server works");
});
