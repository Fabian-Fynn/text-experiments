var express = require('express');
var app = express();
var http = require('http').Server(app);
var request = require('request');
var path = require('path');

app.use(express.static('public'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

http.listen(9800, function() {
  console.log('There we go ♕');
  console.log('Gladly listening on http://127.0.0.1:9800');
});
