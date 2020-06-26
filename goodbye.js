#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Test - So Long Farewell Goodbye\n');
}).listen(8081, 'localhost');
console.log('Server running at http://localhost:8081/');
