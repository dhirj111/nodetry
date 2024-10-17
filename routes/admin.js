const express1 = require('express');
const path1 = require('path');  
//imported 'path' to use path.join in external file locations 

const rootDirectory = require('../utils/path')
//imported that / utils.path.js file module
const productcontrol = require('../controllers/product')
const router = express1.Router();

// stored Router method on express1 constant in a new constant
// now we can code the middlewares but we have to use methods on 
// router instead of app as router.use('/', { ..middleware})

router.use("/add-product", (req1, res1, next1) => {
  console.log("in the middleware ");
  res1.sendFile(path1.join(rootDirectory , "views" , "add-product.html"));
  //by rootdirectory module we can use rootdirectory instead of __dirname 
  //, it tells location of app.js file so no need to go back from routes
});

router.use("/contactus", productcontrol.contactus);
router.use("/success", productcontrol.success);

router.use("/product", (req1, res1, next1) => { 
  console.log(req1.body.title);
  console.log(req1.body.size);
  //able to use .body because of body-parser package
  res1.redirect("/shop/");
  //.redirect and then route address
});


module.exports = router
//we exported above defined router constant in module so that we can import and
// use this module in app.js