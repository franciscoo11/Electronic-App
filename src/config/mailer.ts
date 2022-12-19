import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smpt.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_ACC,
    pass: process.env.MAILER_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify().then(() => {
  console.log('Configuration mailer is success!');
}).catch(() => console.error('ERROR_IN_CONFIGURATION_MAILER'));
