const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carolinedaniellapena@gmail.com',
        subject: 'Welcome to the app!',
        text: `Welcome to the app, ${name}! Let me know your thoughts.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carolinedaniellapena@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Sorry to see you have canceled your account, ${name}. Was there anything we could have done better?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}