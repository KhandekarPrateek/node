const express = require("express");
const app = express();
const { auth, logger } = require("./authorize");
//using multpple middleware
//app.use applies it to all paths
app.use([logger, auth]);
// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

// 3 types of middleware
//our own,express built in,3rd party
