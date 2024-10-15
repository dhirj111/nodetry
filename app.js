const express1 = require("express");
const app1 = express1();
const bodyparser1 = require("body-parser");
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const path1 = require('path');

app1.use(express1.static(path1.join(__dirname , 'public')))
//this will provide read file access to all files of public folder anywhere

//we exported files our next  step will be is to pass variable names(adminroutes , shoproutes) 
app1.use(bodyparser1.urlencoded({ extended: true }));
app1.use("/admin", adminRoutes);
app1.use("/shop", shopRoutes);
//using /path as paramte  r on .use method along with listner function will add /path before 
//middleware as path argument 
app1.use((req1, res1, next1) => {

  res1.status(404).sendFile(path1.join(__dirname, "views", "error.html"))
})
app1.listen(4000, () => {
  console.log("server is running on port 4000");
});