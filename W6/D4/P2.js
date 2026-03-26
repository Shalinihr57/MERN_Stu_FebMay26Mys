// creating a simple http server

const http = require("http");

// createServer(): creates a HTTP server instance
// Accepts a callback with two important objects:
//1.req : incoming request details
//2.res : outgoing response control

const server = http.createServer(function(req,res){
    //writeHead() is a function sets the response status code & headers
    res.writeHead(200,{"Content-Type":"text/plain"});
    //end() sends the response body and closes the response
    res.end("Hello from NodeJS HTTP server.");
});

//listen() binds the server to a port and starts accepting request
server.listen(3000,function(){
    console.log("server is running at http://localhost:3000");
});

//port numbers
//0-1023: system ports
//1024-49151: "Registered ports"
//27017: mongoDB
