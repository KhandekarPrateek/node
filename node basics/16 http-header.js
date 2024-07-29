const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync(
  "/home/khandekar/Desktop/tutorial/node basics/temp.html"
);

const server = http.createServer((req, res) => {
  //look up mime type and status codes if needed
  //writeHead sets the response status code and headers, while write is used to send the response body.
  //the req object has url/method property etc

  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  //error
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>doesnot exist</h1>");
    res.end();
  }
});
server.listen(5000);

//notes
// when we import a big html file also in it we have diff scripts for js and styles in css
//if we donot import them too 404 comes
//so we need to import them too see this or see in repo in computer
//github.com/john-smilga/node-express-course/blob/main/02-express-tutorial/final/02-http-app.js

//IMP IMP
//this example shows that ofc we can set up a website using just http module but it is very cumbersome
