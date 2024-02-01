var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'romain.crocq@gmail.com',
    pass: ''
  }
});

function mailOptions(dest, subject, text) {
  return {
    from: 'romain.crocq@gmail.com',
    to: dest,
    subject: subject,
    text: text
  }
};

exports.sendMail = (dest, subject, text) => {
    transporter.sendMail(mailOptions(dest, subject, text), function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}