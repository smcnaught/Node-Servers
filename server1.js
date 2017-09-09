// Instructions

// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.

// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet

var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;

function requestPort1(request, response){
    response.end("You are awesome");
};

function requestPort2(request, response){
    response.end("You totally suck");
};

// Create a server that functions with requestHandler as the main function.
var server1 = http.createServer(requestPort1);
var server2 = http.createServer(requestPort2);

server1.listen(PORT1, function(){
    console.log("The server is listening on localhost:%s ", PORT1);
});

server2.listen(PORT2, function(){
    console.log("The server is listening on localhost:%s ", PORT2);
});