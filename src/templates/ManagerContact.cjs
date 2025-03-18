const React = require("react");

const ManagerContact = ({ name, email, phone, message }) => {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #004085;
            text-align: center;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
          }
          .blockquote {
            background: #f8f9fa;
            padding: 15px;
            border-left: 4px solid #004085;
            font-style: italic;
            margin: 10px 0;
          }
          .footer {
            text-align: center;
            font-size: 14px;
            margin-top: 20px;
            color: #666;
          }
          .footer img {
            margin-top: 10px;
            width: 100px;
          }
        </style>
      </head>
      <body>
        <div class="footer">
          <strong>Hotel Celebrations Pride</strong>
          <img src="cid:logo" alt="Hotel Logo" class="hotel-logo" />
        </div>
        <div class="container">
          <h2>New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <blockquote class="blockquote">${message}</blockquote>
        </div>
      </body>
    </html>
  `;
};

module.exports = ManagerContact;