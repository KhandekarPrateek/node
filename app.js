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
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((ele) => ele.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "no such perosn found" });
  }
  const newPeople = people.map((ele) => {
    if (ele.id === Number(id)) {
      ele.name = name;
    }
    return ele;
  });
  res.status(200).json({ success: true, data: newPeople });
});

//delete method
app.delete("/api/people/:id", (req, res) => {
  const person = people.find((ele) => ele.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "no such perosn found" });
  }
  const newPeople = people.filter((ele) => ele.id != Number(req.params.id));
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
