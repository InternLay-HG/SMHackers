const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Import bodyParser

const router = express.Router();

const websiteHolderEmail = 'kaushik62041@gmail.com'
const websiteHolderAppPassword = 'plobmaziqcbrpfum'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: websiteHolderEmail, // Replace with your Gmail address
    pass: websiteHolderAppPassword,   // Replace with your App Password
  },
});

router.post('/send-confirmation', (req, res) => {
  const { email, selectedDoctor, selectedDate, problemDescription } = req.body;

  const mailOptions = {
    from: websiteHolderEmail,
    to: email,
    subject: 'Appointment Confirmation',
    text: `Hi, your appointment with Dr. ${selectedDoctor} is confirmed for ${selectedDate} , Reason ${problemDescription}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send confirmation email' });
    }
    res.status(200).json({ message: 'Confirmation email sent successfully' });
  });
});

module.exports = router;
