
var https   = require('https');
var fs      = require('fs');
var express = require('express');
var server  = express();
var folders = {
  '/Day19': 'Day 19',
  '/Day20': 'Day 20',
  '/Day21': 'Day 21'
};

Object.keys(folders).forEach(key => server.use(key, express.static(folders[key])));

server.get('/', function (request, response) {
  response.header('Content-type', 'text/html');
  response.end('<h1>Root folder for JS-30</h1>');
});

var httpsServer = https.createServer({
  'key': fs.readFileSync('SSL/key.pem').toString(),
  'cert': fs.readFileSync('SSL/cert.pem').toString()
}, server);

var listener = httpsServer.listen(8080, '192.168.1.5' || '127.0.0.1', function(){
  console.log('Listening on https://%s:%s ...', listener.address().address, listener.address().port);
});