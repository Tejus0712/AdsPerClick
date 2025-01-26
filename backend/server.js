require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello Tejus!');
});

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, subject, message, phone, address } = req.body;

    if (!name || !email || !subject || !message || !phone || !address) {
      return res.status(400).send('All fields are required.');
    }

    let ownerTransporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Custom HTML email template for owner
    const ownerEmailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Query Received</title>
          <style>
            /* Responsive styles */
            @media only screen and (max-width: 600px) {
              .email-body {
                width: 100% !important;
              }
            }

            /* Email styles */
            .email-body {
              max-width: 600px;
              margin: 0 auto;
              background-color: #f9f9f9;
              padding: 20px;
              border-radius: 5px;
              font-family: Arial, sans-serif;
            }

            .header {
              text-align: center;
              margin-bottom: 30px;
            }

            .logo {
              max-width: 200px;
              height: auto;
            }

            .content {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .content h2 {
              color: #333333;
              margin-top: 0;
            }

            .content table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }

            .content table th,
            .content table td {
              padding: 10px;
              border-bottom: 1px solid #e5e5e5;
            }

            .content table th {
              background-color: #f5f5f5;
              text-align: left;
            }
          </style>
        </head>
        <body>
          <div class="email-body">
            <div class="header">
              <img style={{width:"100px", height: "20px", mixBlendMode: "multiply"}} class="logo" src="${'https://photos.app.goo.gl/qadmj8MxBPb9vFa48'}">
            </div>
            <div class="content">
              <h2>New Query Received</h2>
              <table>
                <tr>
                  <th>Name</th>
                  <td>${name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>${email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>${address}</td>
                </tr>
                <tr>
                  <th>Subject</th>
                  <td>${subject}</td>
                </tr>
                <tr>
                  <th>Message</th>
                  <td>${message}</td>
                </tr>
              </table>
            </div>
          </div>
        </body>
      </html>
    `;

    let senderTransporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Custom HTML email template for sender
    const senderEmailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting Us</title>
          <style>
            /* Responsive styles */
            @media only screen and (max-width: 600px) {
              .email-body {
                width: 100% !important;
              }
            }

            /* Email styles */
            .email-body {
              max-width: 600px;
              margin: 0 auto;
              background-color: #f9f9f9;
              padding: 20px;
              border-radius: 5px;
              font-family: Arial, sans-serif;
            }

            .header {
              text-align: center;
              margin-bottom: 30px;
            }

            .logo {
              max-width: 200px;
              height: auto;
            }

            .content {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .content h2 {
              color: #333333;
              margin-top: 0;
            }
          </style>
        </head>
        <body>
          <div class="email-body">
            <div class="header">
              <img class="logo" style={{width:"100px", height: "20px", mixBlendMode: "multiply"}} src="${'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}" alt="logo">
            </div>
            <div class="content">
              <h2>Thank You for Contacting Us</h2>
              <p>Dear ${name},</p>
              <p>We appreciate you reaching out to us. Your message has been received, and we will get back to you as soon as possible.</p>
              <p>Best regards,<br>AdsPerClick</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await ownerTransporter.sendMail({
      from: `"no-reply" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: 'New query received',
      html: ownerEmailHTML,
    });

    await senderTransporter.sendMail({
      from: `"Ads Per Click" <${process.env.EMAIL}>`,
      to: email,
      subject: 'Thanks for Contacting',
      html: senderEmailHTML,
    });

    console.log("Emails sent successfully");
    res.status(200).send('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error.message, error.stack, error);
    res.status(500).send('Error sending emails: ' + error.message);
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`heello ${process.env.EMAIL}`);
});