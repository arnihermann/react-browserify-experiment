var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');

var server = http.createServer(function (req, res) {
  ecstatic(req, res);
}).listen(8080);

console.log('Listening on :8080');
