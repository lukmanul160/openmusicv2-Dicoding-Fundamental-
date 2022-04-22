const nodemailer = require("nodemailer");

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: "Playlist Musik",
      to: targetEmail,
      subject: "Ekspor Playlist Musik",
      text: "Terlampir hasil dari ekspor Playlist Musik",
      attachments: [
        {
          filename: "notes.json",
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
