const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("first.txt", "utf-8");

console.log(first);
