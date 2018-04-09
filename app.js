var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var app = express();
app.use('/', express.static(__dirname + '/static_html'));
app.listen(8080, '172.31.34.203'); // ip address is internal aws

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use(express.bodyParser());

app.post('/contact', function(req, res) {
	res.send('Thank you! Your email has been sent.');

	// commented the following out because of not wanting to add password for email forwarding, will address later.

	// var data=req.body;

	// var smtpTransport = nodemailer.createTransport("SMTP",{
	// 	service: "Gmail", 
	// 	auth: {
	// 	user: "email@gmail.com",
	// 	pass: "gmailPassword"
	// }});

	// smtpTransport.sendMail({  //email options
	// from: "Sender Name <email@gmail.com>",
	// to: "Receiver Name <receiver@email.com>", // receiver
	// subject: "Emailing with nodemailer", // subject
	// html: "here your data goes" // body (var data which we've declared)
	// }, function(error, response){  //callback
	//      if(error){
	//        console.log(error);
	//     }else{
	//        console.log("Message sent: " + res.message);
	//    }

	// smtpTransport.close(); 
	// }); 
});
