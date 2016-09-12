var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	static_contents = require('./modules/static.js');

server = http.createServer(function (request, response){
	static_contents(request, response);

    if(request.url === '/cars.html') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats.html") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cars/new.html") {
         fs.readFile('./views/cars_form.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

    else if(request.url === '/images/blackbmw.jpeg'){
        fs.readFile('./images/blackbmw.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/three_cats.jpeg'){
        fs.readFile('./images/three_cats.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/stylesheets/style.css'){
        console.log("requesting stylesheets")
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            console.log(errors);
            response.write(contents);
            response.end();
        })
    }    

    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("Running in localhost at port 6789");