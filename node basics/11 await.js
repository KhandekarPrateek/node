const { readFile, writeFile } = require("fs");
//reads file first and notes and writes to result using async await
const start = async () => {
  try {
    const first = await readFile("./first.txt", "utf8");
    const second = await readFile("./notes.txt", "utf8");
    await writeFile("./res.txt", `THIS IS AWESOME : ${first} ${second}`, {
      flag: "a",
    });
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
//The await keyword pauses the execution of the start function until the readFile promise resolves, i.e., the file reading operation completes.
