const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); // Import bodyParser

const router = express.Router();

const websiteHolderEmail = 'kaushik62041@gmail.com'
const websiteHolderAppPassword = 'plobmaziqcbrpfum'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: websiteHolderEmail,
    pass: websiteHolderAppPassword,
  },
});

router.post('/send-confirmation', (req, res) => {
  const { email, selectedDate, doctorName, problemDescription} = req.body;

  const mailOptions = {
    from: `"Medic" <${websiteHolderEmail}>`,
    to: email,
    subject: `Appointment Confirmation with ${doctorName}`,
  
    html: `
      <p>Dear Sir/mam,</p>
      <p>We are pleased to inform you that your appointment with ${doctorName} has been confirmed.</p>
      <p><strong>Date of Appointment:</strong> ${selectedDate}</p>
      <p><strong>Problem Statement:</strong> ${problemDescription}</p>
      <p>Please ensure to arrive at the scheduled time. If you need to make any changes, feel free to contact us.</p>
      <p>We look forward to assisting you.</p>
      <p>Best regards,<br><strong>Medic</strong></p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Confirmation email sent');
  });
});

module.exports = router;
