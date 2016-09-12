var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    static_contents = require('./modules/static.js');

server = http.createServer(function (request, response){
    static_contents(request, response);
});
server.listen(6789);
console.log("Running in localhost at port 6789");