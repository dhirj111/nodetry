const filesystem1 = require("fs");
const requestHandler = (req1, res1) => {
  const txtdata = filesystem1.readFileSync("message1.txt", "utf8");
  //readed txt data of file by readfileSync method
  const wrappedContent = "<p>" + txtdata + "</p>";
  //added that data as p element in wrappedcontent element
  if (req1.url == "/") {
    res1.setHeader("content-type", "text/html");
    res1.write("<html>");
    res1.write("<head>message page</head>");
    res1.write(
      wrappedContent +
        '<body><form action="/message" method ="POST"><input type="text" name="message"><button type="submit">send</button></form></body>'
    );
    //added wrapped content in body
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
      const filteredmessage = parsedbody.split("=")[1];
      //buffer is node method which buffers = make chunks collection
      filesystem1.writeFileSync("message1.txt", filteredmessage);
      //it will create new file containg message="input values" in folder
    });

    //created a file
    res1.statusCode = 302; // redirct code
    res1.setHeader("Location", "/"); // location is a syntax not variable
    res1.end();
    //it again changes directory url location / instead of / message that we done by form action
  }
};
module.exports = requestHandler
//saved requesthandler in global modules that can be imported anywhere

// to  export  multiple modules  we use object in key value pairs like
//module.exports ={
// fun1:requestHandler,
// fun2:"hher is text only"
// }
//now it used as routes1.fun1 in listner

// another way is 
// module.exports.fun1 = requestHandler 
//now it again used as routes1.fun1 in listner