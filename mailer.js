var request = require('request');

//API KEY
var api_key = 'key-80ebd8a4062b3ca35560541b9b714a38';

// Domain
//  NOTE: Sandbox domain for testing only
//        Change this later
var domain = 'sandbox23741fa183b1467da1bd5d449dc1645e.mailgun.org';
var address = 'postmaster@' + domain;

var link = 'fusiform.co';

/**
  Send a welcome email
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
        'html': 'Hello, <b>' + name + '</b>.\
          <p>Welcome to <b><a href="' + link + '">FusiformCAST</a>!</b>',
      }
  }, function(error, response, body) {
      if(error) {
          console.log(error);
      } else {
          console.log(body);
      }
  });
}

/**
  Send an email to reset the password
  @param name - name of the user.
  @param toAddress - recipient's email address
**/
exports.passReset = function(name, toAddress) {
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
        'subject': 'FusiformCAST Password Reset',
        'html': 'Hello, ' + name + '. Click here to reset your password.'
      }
  }, function(error, response, body) {
      if(error) {
          console.log(error);
      } else {
          console.log(body);
      }
  });
}

/**
  Send a notification that the password was changed
  @param name - name of the user.
  @param toAddress - recipient's email address
**/
exports.passChanged = function(name, toAddress) {
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
        'subject': 'FusiformCAST Password Change Notification',
        'html': 'Hello, ' + name + '. Your FusiformCAST password was recently changed.'
      }
  }, function(error, response, body) {
      if(error) {
          console.log(error);
      } else {
          console.log(body);
      }
  });
}

/**
  Send a notification that the password was changed
  @param name - name of the user.
  @param toAddress - recipient's email address
**/
exports.tfaReset = function(name, toAddress) {
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
        'subject': 'FusiformCAST Two-Factor Authentication Reset',
        'html': 'Hello, ' + name + '. Click here to reset your two-factor authentication.'
      }
  }, function(error, response, body) {
      if(error) {
          console.log(error);
      } else {
          console.log(body);
      }
  });
}
