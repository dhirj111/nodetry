const path1 = require('path');
const rootDirectory = require('../utils/path')
const Product = require('../models/product');
//we imported that module or this Product is a usable class for this file
console.log(Product)
exports.getAddProduct = (req1, res1, next1) => {
  console.log("in the middleware ");
  const product = new Product(req1.body.title);
  //we created and  a new object above line and saved that object inside array below
  product.save();
  console.log(Product.fetchAll())
  //this fetches products but it's a static method so need to be used on classname
  console.log(product)
  res1.sendFile(path1.join(rootDirectory, "views", "add-product.html"));

}

exports.err = (req1, res1, next1) => {
  res1.status(404).sendFile(path1.join(__dirname, "..", "views", "error.html"))
}

exports.contactus = (req1, res1, next1) => {
  console.log("in the middleware ");
  res1.sendFile(path1.join(rootDirectory, "views", "contactus.html"));
}
exports.success = (req1, res1, next1) => {
  console.log("in the middleware ");
  res1.sendFile(path1.join(rootDirectory, "views", "success.html"));
  //by rootdirectory module we can use rootdirectory instead of __dirname 
  //, it tells location of app.js file so no need to go back from routes

  exports.showproduct = (req1, res1, next1) => {
    console.log("inside default / ");
    console.log(Product.fetchAll())
    res1.sendFile(path1.join(rootDirectory, "views", "shop.html"));
    //by rootdirectory module we can use rootdirectory instead of __dirname 
    //, it tells location of app.js file so no need to go back from routes
  }
}