// Basis of cookies
const express = require("express");
const app = express();

app.get("/set-theme",function(req,res){
    //res.cookie() tells the browser to start a cookie
    res.cookie("theme","dark");

    res.send("cookie named 'theme' with value 'dark' was send to browser");
});

app.listen(4000,function(){
    console.log("JWT protected route server running @ http://localhost:4000");
});