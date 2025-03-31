const React = require("react");

const CustomerContact = ({ name, message, contactUsLink }) => {
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
          .button {
            display: inline-block;
            background-color: #004085;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            text-align: center;
          }
          .button:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <div class="footer">
          <img src="cid:logo" alt="Hotel Logo" class="hotel-logo" />
        </div>
        <div class="container">
          <h2>Thank You, ${name}!</h2>
          <p>We have received your message and will get back to you shortly.</p>
          <p><strong>Your Message:</strong></p>
          <blockquote class="blockquote">${message}</blockquote>
          <div class="button-container">
            <a href="${contactUsLink}" class="button">Contact Us</a>
          </div>
        </div>
      </body>
    </html>
  `;
};

module.exports = CustomerContact;