// const httpmodule1 = require("http");
const express1 = require("express");
const app1 = express1();
const bodyparser1 = require("body-parser");

app1.use(bodyparser1.urlencoded({ extended: true }));

//must have to use l4 and l16 to use req1.body inside middlewares

app1.use("/add-product", (req1, res1, next1) => {
  console.log("in the middleware ");
  res1.send(
    '<form action = "/product" method ="POST">description<input type = "text" name= "title">size <input type = "number" name= "size"><button type="submit">Add Product</button></form>'
  );
//this will send reponse as object containg key as title we wrote and value as user inputted values but unparsed
});


//below middleware just works for post request on mentionede route/address
app1.post("/product", (req1, res1, next1) => {
  console.log("in body printer");
  console.log(req1.body.title);
  console.log(req1.body.size);
  //as object is parsed it behaves like object 
  //while creating html code when we was writing titles they are actually keys of object so
  //we can access value in form of key value pairs
  res1.redirect("/");
  //.redirect and then route address
});
app1.use("/", (req1, res1, next1) => {
  console.log("inside default / ");
  res1.send("<h1> in / middleware</h1>");
});
// let server1 = httpmodule1.createServer(app1);
// //we invoked
// // here routes no needed to be invoke as its listner  and works writte way
// server1.listen("4000");
//
//instead of line 30 , 33 and line 1 to create a server having a  requesthandle(app1 in our case)
//and then listening to port that can be done as below  ,no need to import http too
//you can read express git docu.. there code is written of working
//https://github.com/expressjs/express/blob/master/lib/application.js  line 609-617
app1.listen(4000, () => {
  console.log("server is running on port 4000");
});
//you can also write anon function to .listen of express
