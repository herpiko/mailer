module.exports = function(key, dom, ad) {

  var request = require('request');

  var api_key = key;
  var domain = dom;
  var address = ad;

  //Sample link used for debug
  var link = 'fusiform.co';

  return {
    setApiKey: function(key) {
        api_key = key;
    },
    setDomain: function(dom) {
      domain = dom;
    },
    setAddress: function(ad) {
      address = ad;
    },

    /**
      Send a welcome email
      @param name - name of the user.
      @param toAddress - recipient's email address
    **/
    welcome: function(name, toAddress) {
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
    },

    /**
      Send an email to reset the password
      @param name - name of the user.
      @param toAddress - recipient's email address
    **/
    passReset: function(name, toAddress) {
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
    },

    /**
      Send a notification that the password was changed
      @param name - name of the user.
      @param toAddress - recipient's email address
    **/
    passChanged: function(name, toAddress) {
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
    },

    /**
      Send a notification that the password was changed
      @param name - name of the user.
      @param toAddress - recipient's email address
    **/
    tfaReset: function(name, toAddress) {
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

  }
}
