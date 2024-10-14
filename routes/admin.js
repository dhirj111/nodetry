const express1 = require("express");
//imported expres and saved in a constant
const filesystem1 = require("fs");
const router = express1.Router();
const bodyparser1 = require("body-parser");
router.use(bodyparser1.urlencoded({ extended: true }));
// stored Router method on express1 constant in a new constant
// now we can code the middlewares but we have to use methods on
// router instead of app as router.use('/', { ..middleware})

router.use("/add-product", (req1, res1, next1) => {
  console.log("in the middleware ");
  res1.send(
    '<form action = "/product" method ="POST">description<input type = "text" name= "title">size <input type = "number" name= "size"><button type="submit">Add Product</button></form>'
  );
}); 

//group chat funcionality

//in /login page of group chat form response asks for username and saves it in local storge 
//then jumps to chat terminal where user can send message
router.use("/login", (req1, res1, next1) => {
  console.log("in username ask form");
  res1.send(
    //'<form action = "/" method ="POST">type username <input type = "text" name= "username"><button type="submit">save username</button></form>'
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input id="username" type="text" name"title"><button type="submit">add</button></form>'
  );
});
// we can set localstorage as our desired values by providing 
//onsubmit event as localStorage.setItem(`username`, document.getElementById(`username`).value)"
//redirection is handled by action in form
//




//below middleware just works for post request on mentionede route/address
router.use("/product", (req1, res1, next1) => {
  console.log(req1.body.title);
  console.log(req1.body.size);
  //able to use .body because of body-parser package
  res1.redirect("/shop/");

  //   res1.send(`
//     <p>Previous messages:</p>
//     <pre>${localStorage.getItem("username")}</pre>

//     <form onsubmit="/" method="POST">
//       <label for="msg">Enter your message:</label>
//       <input type="text" name="msg" required>
//       <button type="submit">Send Message</button>
//     </form>
//   `);
  //.redirect and then route address 
});

module.exports = router;
//we exported above defined router constant in module so that we can import and use this module in app.js
