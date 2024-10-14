const express1 = require("express");
//imported expres and saved in a constant

//const LocalStorage = require("node-localstorage").LocalStorage;
//installed and used localstorae here and in  line 11
//imported node-ls with .ls method in ls variable
const filesystem1 = require("fs");
const router = express1.Router();
const bodyparser1 = require("body-parser");
router.use(bodyparser1.urlencoded({ extended: true }));
// const localStorage = new LocalStorage("./scratch");
// stored Router method on express1 constant in a new constant
// now we can code the middlewares but we have to use methods on
// router instead of app as router.use('/', { ..middleware})

//this is middleware where we are handling actual chat of users

//all functions of previous old single  middleware which now replaced with two middlewares in bug fix 1.1
//it gets username from localstorage if its second message of user and sets if its first
//then it reads all previous chats of users by reading message1,txt whole data and prints it on page
//then there is form which asks for message of user , it then saves usernsme and message in file and
//jumps to current middleware again


//bug fix 1.1 steps
//1.1 ill divide router into two parts one for get containing input form and one that handles updating username:message  in txt file
//and remember our current programme does not have feature to create text file  , currently its manually created

/* first middleware is doing following tasks
as we can edit browser values in form responses only here we will implement it  by firstly setting document.getElementById('username').value as username stored in localstorage but we will not show this
value in browser by making it hidden

As of now we have username and message in browser fields  , then we will save updated messages in /post iddleware
*/
router.get("/", (req1, res1, next1) => {
  const updatedContent = filesystem1.readFileSync('message1.txt', 'utf8');
  // we readed message1.txt file content so that we can display it in response below
  res1.send(`
        <p>Previous messages:</p>
        <pre>${updatedContent}</pre>
     <form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
      <input id="message" name="message" type="text" placeholder="message">
      <input name="username" id="username" type="hidden">
      <button type="submit">Send Message</button>
    </form>
  `);
})

/* second middleware functions
get username and password by input fields and appends it to end of
message1.txt file end 
redirects to itself again 
*/
router.post("/", (req1  , res1 ,next1)=>{
  if(req1.body.message){
  const newMessage = `${req1.body.username}: ${req1.body.message}\n`;
  filesystem1.appendFileSync("message1.txt", newMessage)}
  // filesystem1.appendFileSync("message1.txt"," newMessage");
  console.log("in / middleware " , req1.body)
;
  res1.redirect("/")
  //here type of request is get so it will jump to above .get middleware
})

//
module.exports = router;
//we exported above defined router constant in module so that we can import and use this module in app.js
