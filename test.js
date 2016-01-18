var api_key = 'key-80ebd8a4062b3ca35560541b9b714a38';
var domain = 'sandbox23741fa183b1467da1bd5d449dc1645e.mailgun.org';
var address = 'postmaster@' + domain;

var mailer = require('./mailer.js')(api_key, domain, address);

mailer.welcome('Pranav', 'pranz.laks@gmail.com');

// mailer.passReset('Pranav', 'pranz.laks@gmail.com');
// mailer.passChanged('Pranav', 'pranz.laks@gmail.com');
// mailer.tfaReset('Pranav', 'pranz.laks@gmail.com');
