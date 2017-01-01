
var https   = require('https');
var fs      = require('fs');
var express = require('express');
var server = express();

server.use('/Day19', express.static('Day 19'));
server.use('/Day20', express.static('Day 20'));
server.use('/Day21', express.static('Day 21'));

var httpsServer = https.createServer({
  'key': fs.readFileSync('SSL/key.pem').toString(),
  'cert': fs.readFileSync('SSL/cert.pem').toString()
}, server);

var listener = httpsServer.listen(8080, '192.168.1.5' || '127.0.0.1', function(){
  console.log('Listening on https://%s:%s ...', listener.address().address, listener.address().port);
});

server.get('/', function (request, response) {
  response.header('Content-type', 'text/html');
  response.end('<h1>Root folder for JS-30</h1>');
});