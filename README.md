# mailer
Node scripts for using Mailgun.

`mailer.js` exports as a module with functions to send each type of e-mail.

Messages can be formatted as HTML within in the `html` parameter of each form.

###Functions
`setApiKey`: Set the API key

`setDomain`: Set the domain (ie. fusiform.co)

`setAddress`: Set the from address (ie. postmaster@fusiform.co)

`welcome`: Send "Welcome" email

`passReset`: Send password reset link and instructions

`passChanged`: Send notification that password was changed

`tfaReset`: Send link and instructions to reset TFA settings

###Example
```
var api_key = 'key-1234';
var domain = 'sampledomain.mailgun.org';
var address = 'postmaster@' + domain;

var mailer = require('./mailer.js')(api_key, domain, address);

mailer.welcome('Pranav', 'pranz.laks@gmail.com');
mailer.passReset('Pranav', 'pranz.laks@gmail.com');
mailer.passChanged('Pranav', 'pranz.laks@gmail.com');
mailer.tfaReset('Pranav', 'pranz.laks@gmail.com');
```

###TO-DO:
* Verify domain and from address
* Format messages for each e-mail
* Add to function arguments
