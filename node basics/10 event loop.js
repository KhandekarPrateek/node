const { readFile } = require("fs");

console.log("first task"); //executed first

readFile("./notes.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result); //executed last
    console.log("task over");
  }
});
//executed second
console.log("next task ");
