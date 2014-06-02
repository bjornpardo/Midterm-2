var express = require('express');
var bodyParser = require('body-parser');
var mongoose =  require('mongoose');
var courierController = require('./controllers/courierController.js')


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

mongoose.connect('mongodb://localhost/courier');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/courier', courierController.index);

app.post('/courier', courierController.create);

app.get('/area', function(req, res) {
	res.render('area');
});

app.post('/edit', courierController.update);

var server = app.listen(5820, function() {
	console.log('Express server listening on port ' + server.address().port);
});
