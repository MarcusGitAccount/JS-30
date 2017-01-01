
var express = require('express');
var server  = express();

server.use('/Day19', express.static('Day 19'));
server.use('/Day20', express.static('Day 20'));
server.use('/Day21', express.static('Day 20'));

var listener = server.listen(8080, '192.168.1.5' || '127.0.0.1', function(){
  console.log('Listening on http://%s:%s ...', listener.address().address, listener.address().port);
});
