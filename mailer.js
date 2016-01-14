var request = require('request');

//API KEY
var api_key = 'key-80ebd8a4062b3ca35560541b9b714a38';

// Domain
//  NOTE: Sandbox domain for testing only
//        Change this later
var domain = 'sandbox23741fa183b1467da1bd5d449dc1645e.mailgun.org';
var address = 'postmaster@' + domain;

/**
  Send a welcom email
  @param name - name of the user.
  @param toAddress - recipient's email address
**/
exports.welcome = function(name, toAddress) {
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
        'subject': 'Welcome to FusiformCAST!',
        'text': 'Hello, ' + name + '. Welcome to FusiformCAST!'
      }
  }, function(error, response, body){
      if(error) {
          console.log(error);
      } else {
          console.log(body);
      }
  });
}
