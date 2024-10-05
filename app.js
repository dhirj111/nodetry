const httpmodule1 = require("http");
const express1 = require('express')
const app1 = express1();
//express1 returns a function that we called above and stored in app1.js
//now we can perform diffrent operations on app1
//it does also behave as listner

//express js is all about middlware
//middleware means excetuable functionalities a colections of request reponse

//middleware is created by .use on app1
//.use accepts requesthandler functions or we can declare anonymous functions in .use brackets  too
//but it should necessarily consist three parameters request response and next(a functions that 
//we invoke to jump to next middleware)

app1.use((req1 , res1 , next1)=>{
console.log("in the middleware ")
next1()
//jumps to next middleware 
})

app1.use((req1 , res1 , next1)=>{
  console.log("in the another middleware2 ")
  //jumps to next middleware 
  //removed next1() as there is no middleware to jump and nor required

  res1.send('<h1> Hello from express </h1>')
  //response.send sends reponse as coder define in bracket
  })
let server1 = httpmodule1.createServer(app1);
//we invoked 
// here routes no needed to be invoke as its listner  and works writte way

server1.listen("4000");
//