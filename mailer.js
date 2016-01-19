module.exports = function(cred) {

  var request = require('request');

  var api_key = cred.key;
  var domain = cred.domain;
  var address = cred.address;

  //Sample link used for debug
  var link = 'fusiform.co';

  return {
    /**
      Set the api key
      @param key - new API key
    **/
    setApiKey: function(key) {
        api_key = key;
    },
    /**
      Set the domain
      @param dom - new domain
    **/
    setDomain: function(dom) {
      domain = dom;
    },
    /**
      Set the from address
      @param ad - new from address
    **/
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
          } else if (response.statusCode != 200) {
              console.log({
                'Status': 'Message send failure',
                'Type': 'Welcome'
              });
          } else {
              console.log({
                'Status': 'Message sent',
                'Type': 'Welcome'
              });
          }
      });
    },

    /**
      Verify your email
      @param name - name of the user.
      @param toAddress - recipient's email address
      @param verify_link - link to verify email
    **/
    verifyEmail: function(name, toAddress, verify_link) {
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
              <p>Verify your email. <b><a href="' + verify_link + '">Click here!</a>!</b>',
          }
      }, function(error, response, body) {
          if(error) {
              console.log(error);
          } else if (response.statusCode != 200) {
              console.log({
                'Status': 'Message send failure',
                'Type': 'Email verification'
              });
          } else {
              console.log({
                'Status': 'Message sent',
                'Type': 'Email verification'
              });
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
          } else if (response.statusCode != 200) {
              console.log({
                'Status': 'Message send failure',
                'Type': 'Password reset'
              });
          } else {
              console.log({
                'Status': 'Message sent',
                'Type': 'Password reset'
              });
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
          } else if (response.statusCode != 200) {
              console.log({
                'Status': 'Message send failure',
                'Type': 'Password reset notification'
              });
          } else {
              console.log({
                'Status': 'Message sent',
                'Type': 'Password reset notification'
              });
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
          } else if (response.statusCode != 200) {
              console.log({
                'Status': 'Message send failure',
                'Type': 'TFA reset'
              });
          } else {
              console.log({
                'Status': 'Message sent',
                'Type': 'TFA reset'
              });
          }
      });
    }

  }
}
