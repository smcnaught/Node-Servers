// url package will allow us to parse parts of the request url.
var url = require('url');

// require http
var http = require('http');

// This is the port we are going to listen on.
var PORT = 8080;

// Function tthat runs when our localhost:PORT  is hit with http traffic or a web browser. 
function requestHandler(request, response) {
    var urlParts = url.parse(request.url);
    // response.end("url: " + JSON.stringify(urlParts));
    switch (urlParts.pathname) {
        case "/":
            displayRoot(urlParts.pathname, request, response);
            break;
        case "/portfolio":
            response.end("This is my portfolio")
            break;
        case "/edit":
            console.log("display edit");
            response.end("You're going to edit, eh?");
            break;
        case "/fun":
            response.end("You just won a new car!");
            break;
        default:
            console.log("Might not have worked");
            break;
    }
};

function displayRoot(url, request, response) {
    var myHTML = "<html>";
    myHTML += "<body><h1>Home Page</h1>";
    myHTML += "<a href='/portfolio'>Portfolio Page</a>";
    myHTML += "</body></html>";
    response.writeHead(200, { 'Content-Type': "text/html" });
    response.end(myHTML);
};

// Create a server that functions with requestHandler as the main function.
var server = http.createServer(requestHandler);

// Directs the server to listen for http requests on PORT(8081).
// Also prints to the node console what port we are listening on. 
server.listen(PORT, function () {
    console.log("The server is listening on localhost:%s", PORT);
});