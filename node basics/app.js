const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  //look up mime type and status codes if needed
  //writeHead sets the response status code and headers, while write is used to send the response body.
  res.write("<h1>hello</h1>");
  res.end();
  //the req object has url/method property etc
});
server.listen(5000);
