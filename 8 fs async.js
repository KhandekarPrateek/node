const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./first.txt", "utf-8", (err, result) => {
  if (err) {
    return;
  } else {
    console.log(result);
    //write file wrote to res.txt
    writeFile(
      "./res.txt",
      "hello this is written from fs async",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          console.log("done");
        }
      }
    );
  }
});
//this statemnt ran before done due to async nature
console.log("start again ");
