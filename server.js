var express = require('express');
var app = express();
var morgan = require('morgan');

//Configuration
app.use(express.static(__dirname + '/dist'));
app.use(morgan('dev'));

//Routing
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(8080);
console.log('App listening on port 8080');