const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  //sends data from server to browser first api
  res.json(products);
});

app.listen(5000, () => {
  console.log("server works");
});
