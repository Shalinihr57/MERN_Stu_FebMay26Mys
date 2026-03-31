// Handling different HTTP methods in express
const express = require("express");

const app = express();
app.get("/users",function(req,res){
res.status(200).json([{
        message:"successfull."},
        {id:1,name:"shalini"},
        {id:1,name:"bipin"},
        {id:1,name:"kr"},
        ]);
        res.send("Returning all users");
});

//To create
app.post("/users",function(req,res){
    //res.status() sets the HTTP status code before sending the response body
    res.status(201).send("User created.");
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});