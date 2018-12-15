//Run npm install express
//Run node app.js
var express = require("express");
var app = express();

//Define first route
// "/" => "Hi there!"
app.get("/", function(request, response){
    console.log("Someone made a request to root!");
    response.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(request, response){
    console.log("Someone made a request to /bye!");
    response.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(request, response){
    console.log("Someone made a request to /dog!");
    response.send("MEOW!"); 
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});