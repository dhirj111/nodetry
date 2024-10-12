const express1 = require("express");
//imported expres and saved in a constant

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
    '<form action = "/" method ="POST">type username <input type = "text" name= "username"><button type="submit">save username</button></form>'
  );
});

//below middleware just works for post request on mentionede route/address
router.use("/product", (req1, res1, next1) => {
  console.log(req1.body.title);
  console.log(req1.body.size);
  //able to use .body because of body-parser package
  res1.redirect("/shop/");
  //.redirect and then route address
});

module.exports = router;
//we exported above defined router constant in module so that we can import and use this module in app.js
