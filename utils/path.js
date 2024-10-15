const path1 = require('path');
module.exports = path1.dirname(process.mainModule.filename);
//here we exported module which will tell us name of main module file(app.js) that started our application