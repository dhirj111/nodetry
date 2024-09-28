const httpmodule1 = require('http');
let server1 =httpmodule1.createServer(function(req1 , res1){
console.log(req1)
console.log("name printed")
})

server1.listen('4000')