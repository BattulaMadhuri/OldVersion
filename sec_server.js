var http = require('http');
var imp = require('./first_mod2');

http.createServer(function(req,res){
const msg=imp.msg();
console.log(msg);
res.write(msg);
res.end();
}).listen(7000);
