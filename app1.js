const httpmodule1 = require("http");
const filesystem1 = require("fs");
// added file system
let server1 = httpmodule1.createServer(function (req1, res1) {
  if (req1.url == "/") {
    res1.setHeader("content-type", "text/html");
    res1.write("<html>");
    res1.write("<head>message page</head>");
    res1.write(
      '<body><form action="/message" method ="POST"><input type="text" name="message"><button type="submit">send</button></form></body>'
    );
    //remember strictly single   ' '  is required no ""
    //form action="/message" automatically works on host and changes it to localhost:4000/message
    res1.write("</html>");
    res1.end();
  }
  // after above line code thread reaches below and divert url as wrote
  if (req1.url == "/message" && req1.method == "POST") {
    const body1 = []; // created array to store data
    req1.on("data", (chunk) => {
      // if console  chunk here it will print ascii code of each chunk
      body1.push(chunk);
    });
    req1.on("end", () => {
      const parsedbody = Buffer.concat(body1).toString();
      //buffer is node method which buffers = make chunks collection
      filesystem1.writeFileSync("message1.txt", parsedbody);
      //it will create new file containg message="input values" in folder
    });

    //created a file
    res1.statusCode = 302; // redirct code
    res1.setHeader("Location", "/"); // location is a syntax not variable
    res1.end();
    //it again changes directory url location / instead of / message that we done by form action
  }
});

server1.listen("4000");
