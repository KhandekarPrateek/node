//modeule imported
const express = require("express");

//its functioin is called
//app is an object
const app = express();
//whenever user perfroms a get request on first parameter ie / here callback is invoked
app.get("/", (req, res) => {
  console.log("user hits the home page");
  res.status(200).send("home page");
});
app.get("/about", (req, res) => {
  console.log("user hits the about page");
  res.status(200).send("about page");
});

//using all methods ie all get put etc combined
app.all("*", (req, res) => {
  console.log("using all");
  //we handle requests other than above mentioned like above so get a 200 code instead of 404
  res.status(404).send("bro go to a existing page ");
  // The status() method in your Express routes is used to set the HTTP status code for the response.
});
//listening
app.listen(5000, () => {
  console.log("server  works");
});
