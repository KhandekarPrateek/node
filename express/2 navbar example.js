const express = require("express");
const path = require("path");

const app = express();
//set up static and middleware ?
app.use(express.static("express/public"));
//what is static?
//it the asset which the server doesnot need to change it so we just keep it in a designated flder called public (convention)
//and use ofexpress here is that it sets up the path and status code for all assets which we ourselves needed to do in node http modules

app.get("/", (req, res) => {
  // 1sendFile sends a file in a resposne Object
  //path.resolve is provided by node and it basically converts the arguments passed into it into absolute path
  //__dirname is direcyory name of current directory

  res.sendFile(path.resolve(__dirname, "express/public/index.html"));
});

app.all("*", (req, res) => {
  console.log("using all");
  res.status(404).send("page not found ");
});
app.listen(5000, () => {
  console.log("server  works");
});
