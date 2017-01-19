var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/message', (req, res) => {
	console.log('somebody is posting');
	console.log('reqxxxxxxxx: ', req);
	console.log('bodyxxxxxxx: ',req.body);
	console.log('dataxxxxxxx: ', req.data);
	console.log('keysxxxxxxx', Object.keys(req));
});

app.listen(port);
console.log('server listening on ', port);