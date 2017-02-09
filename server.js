var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.end("hello word");
}).listen(8888);
console.log("server start listen 8888");