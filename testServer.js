// require http
var http = require('http');

// This is the port we are going to listen on.
var PORT = 8081;

// Function tthat runs when our localhost:PORT  is hit with http traffic or a web browser. 
function requestHandler(request, response){
    response.end("<h1>" + request.url + "</h1>");
};

// Create a server that functions with requestHandler as the main function.
var server = http.createServer(requestHandler);

// Directs the server to listen for http requests on PORT(8081).
// Also prints to the node console what port we are listening on. 
server.listen(PORT, function(){
    console.log("The server is listening on localhost:%s", PORT);
});