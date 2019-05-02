var http = require('http');
var fs = require('fs');
var d3 = require('d3');
var index = fs.readFileSync('Main.html');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
}).listen(9615);