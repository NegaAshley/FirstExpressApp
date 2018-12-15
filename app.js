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

//Subreddit example
//Response pattern used
app.get("/r/:subredditName", function(request, response){
    var subreddit = request.params.subredditName;
    console.log("Someone made a request to go to the " + subreddit + " subreddit!");
    response.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(request, response){
    console.log("Someone made a request to view comments!");
    response.send("WELCOME TO THE COMMENTS PAGE!");
});

// Undefined request
// The order of routes matters.
// The first route that matches a request is the only one that is run.
// "*" => "You are a star!!"
app.get("*", function(request, response){
    console.log("Someone made a different request!");
    response.send("You are a star!");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});