const httpmodule1 = require("http");
const { text } = require("stream/consumers");
let server1 = httpmodule1.createServer(function (req1, res1) {

  //req.url prints  which url we are performing request on , it print whatver is after localhost:4000 in current case
  //while comparing it with /home/  ,'/home/' doesn.t work
  if (req1.url == /home/) {
    res1.setHeader("content-type", "text/html");
    res1.write("<h1>Welcome home</h1>");
    res1.end();
  } else if (req1.url == /about/) {
    res1.setHeader("content-type", "text/html");
    res1.write("<h1>Welcome to About Us page</h1>");
    res1.end();
  } else if (req1.url == /node/) {
    res1.setHeader("content-type", "text/html");
    res1.write("<h1>Welcome to my Node Js project</h1>");
    res1.end();
  }
  process.exit();
});

server1.listen("4000");
