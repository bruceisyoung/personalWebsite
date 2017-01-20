var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var port = process.env.PORT || 8080;
var app = express();

console.log('password: ', process.env.email);
console.log('email: ', process.env.password);

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
  		user: process.env.email,
  		pass: process.env.password
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