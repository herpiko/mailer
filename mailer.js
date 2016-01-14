var requests = require('requests');
var bodyParser = require('body-parser');

//Express
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));

//API KEY
var api_key = 'key-80ebd8a4062b3ca35560541b9b714a38';

//Domain
//  NOTE: Sandbox domain for testing only
var domain = 'postmaster@sandbox23741fa183b1467da1bd5d449dc1645e.mailgun.org';



//Create the server
var server = app.listen(8081, 'localhost', function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Listening on ' + host + ':' + port + "\n");
});
