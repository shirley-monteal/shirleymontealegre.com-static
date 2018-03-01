var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/static_html'));
app.listen(8080, '172.31.22.173'); // ip address is internal aws
