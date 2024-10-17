const path1 = require('path');
const rootDirectory = require('../utils/path')
exports.getAddProduct = (req1, res1, next1) => {
  console.log("in the middleware ");
  res1.sendFile(path1.join(rootDirectory, "views", "add-product.html"));
  //by rootdirectory module we can use rootdirectory instead of __dirname 
  //, it tells location of app.js file so no need to go back from routes
}


exports.err = (req1, res1, next1) => {
  res1.status(404).sendFile(path1.join(__dirname, "..", "views", "error.html"))
}

exports.contactus = (req1, res1, next1) => {
  console.log("in the middleware ");
  res1.sendFile(path1.join(rootDirectory , "views" , "contactus.html"));
  //by rootdirectory module we can use rootdirectory instead of __dirname 
  //, it tells location of app.js file so no need to go back from routes
}
exports.success =(req1, res1, next1) => {
  console.log("in the middleware ");
  res1.sendFile(path1.join(rootDirectory , "views" , "success.html"));
  //by rootdirectory module we can use rootdirectory instead of __dirname 
  //, it tells location of app.js file so no need to go back from routes
}