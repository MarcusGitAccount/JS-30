
var express = require('express');
var server  = express();

server.use('/Day19', express.static('Day 19'));

var listener = server.listen(8080, '127.0.0.1', function(){
  console.log('Listening on http://%s:%s ...', listener.address().address, listener.address().port);
});
