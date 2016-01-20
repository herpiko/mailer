# mailer
Node scripts for using Mailgun.

`mailer.js` exports as a module with functions to send each type of e-mail.

Messages can be formatted as HTML within in the `html` parameter of each form.

### Installation
`npm install mailgun-mailer`

### Functions
`setApiKey`: Set the API key

`setDomain`: Set the domain (ie. fusiform.co)

`setAddress`: Set the from address (ie. postmaster@fusiform.co)

`sendMail`: Send an email based on a specified HTML template (for newsletters, password reset notifications, etc.)

Parameters:
* name - string - name of recipient
* toAddress - string - recipient's email address
* subject - string - subject of email
* templateFile - string - path to HTML template of file

`sendLink`: Send an email with a custom link (for email verification, password reset, etc.)

Parameters:
* name - string - name of recipient
* toAddress - string - recipient's email address
* subject - string - subject of email
* templateFile - string - path to HTML template of file
* link - string - link to insert into email template

#### Other functions

`setAddress`: Set the from address (ie. postmaster@fusiform.co)

`welcome`: Send "Welcome" email

`verifyEmail`: Send verification email for new account

`passReset`: Send password reset link and instructions

`passChanged`: Send notification that password was changed

`tfaReset`: Send link and instructions to reset TFA settings

### Example
```
var cred = {
  'key': 'key-00001234',
  'domain': 'sandbox1234.mailgun.org',
  'address': 'postmaster@sandbox1234.mailgun.org'
};

//Whether or not to print debug messages
var debug = false;

var mailer = require('mailgun-mailer')(cred, debug);

mailer.sendLink('Pranav', 'pranz.laks@gmail.com', 'Welcome to FusiformCAST!', 'path/to/template/', 'www.verification_link.com/00001234');
```
