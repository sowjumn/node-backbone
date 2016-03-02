var express = require('express');
var app = express();
var router = express.Router();
var morgan = require('morgan');

//Configuration
app.use(express.static(__dirname + '/dist'));
app.use(morgan('dev'));
app.use('/api', router);

//Routing
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
  
});

router.route('/sowju').get(function(req, res) {
  res.json({message: 'awesome'});
});

app.listen(8080);
console.log('App listening on port 8080');