const React = require("react");

const ManagerEmail = ({ checkin, checkout, guests, children, email }) => {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .booking-container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .logo-container {
            text-align: center;
          }
          .logo {
            width: 150px;
          }
          .header {
            background: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 15px;
            font-size: 24px;
            border-radius: 8px 8px 0 0;
          }
          .content {
            padding: 20px;
            text-align: left;
            color: #333;
          }
          .booking-details {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-top: 15px;
          }
          .booking-details p {
            margin: 8px 0;
            font-size: 16px;
          }
          .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
            padding: 10px;
            margin-top: 20px;
            border-top: 1px solid #ddd;
          }
        </style>
      </head>
      <body>
        <div class="booking-container">
          <div class="logo-container">
            <img src="cid:logo" alt="Hotel Logo" class="logo" />
          </div>
          <div class="header">Booking Enquiry</div>
          <div class="content">
            <p>Hello Manager,</p>
            <p>Here are the enquiry details submitted by a guest on our website:</p>
            <div class="booking-details">
              <p><strong>Check-in:</strong> ${checkin}</p>
              <p><strong>Check-out:</strong> ${checkout}</p>
              <p><strong>Guests:</strong> ${guests}</p>
              <p><strong>Children:</strong> ${children}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
            <p>If you wish to connect with the guest, feel free to reply to this email.</p>
            <p>For any clarification, contact site Admin - Joel!</p>
          </div>
          <div class="footer">© 2025 Hotel Celebrations Pride | All Rights Reserved</div>
        </div>
      </body>
    </html>
  `;
};

module.exports = ManagerEmail;