# mailer
Node scripts for using Mailgun.

`mailer.js` exports as a module with functions to send each type of e-mail.

Messages can be formatted as HTML within in the `html` parameter of each form.

###Installation
`npm install mailgun-mailer`

###Functions
`setApiKey`: Set the API key

`setDomain`: Set the domain (ie. fusiform.co)

`setAddress`: Set the from address (ie. postmaster@fusiform.co)

`welcome`: Send "Welcome" email

`verifyEmail`: Send verification email for new account

`passReset`: Send password reset link and instructions

`passChanged`: Send notification that password was changed

`tfaReset`: Send link and instructions to reset TFA settings

###Example
```
var cred = {
  'key': 'key-00001234',
  'domain': 'sandbox1234.mailgun.org',
  'address': 'postmaster@sandbox1234.mailgun.org'
};

var mailer = require('mailgun-mailer')(cred);

mailer.welcome('Pranav', 'pranz.laks@gmail.com');
```

###TO-DO:
* Format messages for each e-mail
