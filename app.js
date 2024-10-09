// const httpmodule1 = require("http");
const express1 = require("express");
const app1 = express1();
const bodyparser1 = require("body-parser");
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

//we exported files our next  step will be is to pass variable names(adminroutes , shoproutes) 
//as a requestlistner to app1.methods lik app11.use [done in line 12 and 13 in this commit]
app1.use(bodyparser1.urlencoded({ extended: true }));
//must have to use l4 and l16 to use req1.body inside middlewares
app1.use("/admin" , adminRoutes);
app1.use("/shop" , shopRoutes);
//using /path as paramter on .use method along with listner function will add /path before 
//middleware as path argument 
//middleware as path argument 
app1.use((req1 ,res1 , next1)=>{

res1.status(404).send('<h1>error 404 </h1><h4>just implmented default middleware with res methods = status(404).send</h4>')
})  
app1.listen(4000, () => {
  console.log("server is running on port 4000");
});
//you can also write anon function to .listen of express
