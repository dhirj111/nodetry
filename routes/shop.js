const express1 = require('express');
const path1 = require('path');
//imported 'path' to use path.join in external file locations
const router = express1.Router();
const rootDirectory = require('../utils/path')
const productcontrol = require('../controllers/product')
//imported that / utils.path.js file module

// stored Router method on express1 constant in a new constant
// now we can code the middlewares but we have to use methods on 
// router instead of app as router.use('/', { ..middleware})

router.use("/",productcontrol.showproduct);

module.exports = router
//we exported above defined router constant in module so that we 
//can import and use this module in app.js