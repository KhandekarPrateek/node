const http = require("http");
//req is incoming request in server
// and res is resposne we are sending back
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to home page");
  } else if (req.url === "/about") {
    res.write("prateek dada welcomes you");
  } else {
    res.end(`
        
        <h1>go to home again
        </h1>
        <a href='/'> back home </a>
        `);
  }
  res.end();
});
//this is the port where server listend to
server.listen(3000);
