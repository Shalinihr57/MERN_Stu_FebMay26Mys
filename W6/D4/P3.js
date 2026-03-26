// Inspecting request details in an HTTP server

const http = require("http");

const server = http.createServer(function(req,res){
    //writeHead() is a function sets the response status code & headers
    res.writeHead(200,{"Content-Type":"text/plain"});
    //end() sends the response body and closes the response
    //req.method tells the HTTP method, such as GET & POST
    res.end("Method:"+req.method+"\nURL:"+req.url);
});

server.listen(3001,function(){
    console.log("server is running at http://localhost:3001");
});