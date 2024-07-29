const express = require("express");
const app = express();
let { people } = require("/home/khandekar/Desktop/tutorial/express/data.js");

//static assets
app.use(
  express.static("/home/khandekar/Desktop/tutorial/express/methods-public")
);
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
//post
//for javascript.html
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});
//for index.html
app.post("/login", (req, res) => {
  // console.log(req.body);
  const { name } = req.body; //this name property has been written as a key value pair in index.html forms
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  res.status(401).send("pls give creds");
});

//put method
//update data

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
