//streams are used to read or write sequentially
// types:
// 1 Writable
// 2 Readable
// 3 Duplex
// 4 Transform

//can also extend event emitter class and handle events as data for streams

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  encoding: "utf-8",
});

stream.on("data", (res) => {
  console.log(res);
});

// sets up an event listener on the stream object for the 'data' event. The 'data' event is emitted whenever
// a chunk of data is available to be read from the stream.
stream.on("error", (res) => {
  console.log(res);
}); //error event on stream checks for error
