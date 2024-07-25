const http = require("http");
const server = http.createServer();
//behind the scenes server creates request event and we can just listen to it instead on callback in creatserver

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(3000);
