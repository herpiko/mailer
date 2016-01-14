var request = require('request');
var bodyParser = require('body-parser');

// API KEY
var api_key = 'key-80ebd8a4062b3ca35560541b9b714a38';

// Domain
//  NOTE: Sandbox domain for testing only
var domain = 'sandbox23741fa183b1467da1bd5d449dc1645e.mailgun.org';
var address = 'postmaster@' + domain;

var toAddress = 'pranz.laks@gmail.com';

// LOG
console.log('\n' + domain);
console.log(address + '\n');

request({
    url: 'https://api.mailgun.net/v3/' + domain + '/messages',
    method: 'POST',
    'auth': {
      'user': 'api',
      'password': api_key
    },
    form: {
      'from': address,
      'to': toAddress,
      'subject': 'Mailgun test from Node',
      'text': 'This message was sent from Node. Yayyy!'
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(body);
    }
});
