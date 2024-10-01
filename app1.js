const httpmodule1 = require("http");
const routes1 = require('./routes.js');
const requestHandler = require("./routes.js");
// we imported  routes.js  by global modules and stored that in routes1
// added file system
let server1 = httpmodule1.createServer(routes1);
// here routes no needed to be invoke as its listner  and works writte way

server1.listen("4000");
