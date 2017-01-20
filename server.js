var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var emailCredentials = require('./emailCredentials');

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
  var transporter = nodemailer.createTransport({
  	service: 'Gmail',
  	auth: {
  		user: emailCredentials.email,
  		pass: emailCredentials.password
  	}
  });
  var mailOptions = {
  	from: emailCredentials.email,
  	to: 'isyoung.bruce@gmail.com',
  	subject: req.body.name + ' said Hi',
  	text: 'email: ' + req.body.email + '\n' + 'message: ' + req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info) {
  	if (error) {
  		console.log(error);
  		res.json('Something went wrong');
  	} else {
  		console.log('Message sent: ' + info.response);
  		res.json('Your message is sent.\nI will contact you as soon as possible!')
  	}
  });
});

app.listen(port);
console.log('server listening on ', port);