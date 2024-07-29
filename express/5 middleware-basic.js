const express = require("express");
const app = express();
//req --->middleware -->res
//middleware has access to both and does functianlity on them
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //in middle ware always pass to the next middleware or end the cycle there by res.send
  //or the server will hang and timeout
  // res.send("end cycle");
  next(); //pass to next
};
//pass middleware to all routes
app.get("/", logger, (req, res) => {
  res.send("home");
});
app.get("/about", logger, (req, res) => {
  res.send("about");
});

//listens
app.listen(5000, () => {
  console.log("server works");
});
