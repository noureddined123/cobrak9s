var rp = require('request-promise');
var http = require('http');


//create a server object:
http.createServer(function (req, res) {

    rp('http://www.appdynamics.com')
    .then(function (htmlString) {
        res.write('Hello World!'); //write a response to the client
        res.end();//end the response - else error
    })
    .catch(function (err) {
        res.write('ERROR Roel!'); //write a response to the client
        res.end();//end the response - else error
    });



}).listen(8080); //the server object listens on port 8080







