var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use('/', express.static(__dirname + '/static_html'));
app.listen(8080, '172.31.34.203'); // ip address is internal aws

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.post('/contact', function(req, res) {
  res.send('Thank you!! Your email has been sent');
});
