const express1 = require('express');
const path1 = require('path');
//imported 'path' to use path.join in external file locations
const router = express1.Router();
// stored Router method on express1 constant in a new constant
// now we can code the middlewares but we have to use methods on 
// router instead of app as router.use('/', { ..middleware})


router.use("/", (req1, res1, next1) => {
  console.log("inside default / ");
  res1.sendFile(path1.join(__dirname , "../" , "views" , "shop.html"));
});



module.exports = router
//we exported above defined router constant in module so that we 
//can import and use this module in app.js