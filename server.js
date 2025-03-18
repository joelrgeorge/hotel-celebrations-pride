const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const nodemailer = require("nodemailer");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ManagerEmail = require("./src/templates/ManagerEmail.cjs");
const CustomerEmail = require("./src/templates/CustomerEmail.cjs");
const ManagerContact = require("./src/templates/ManagerContact.cjs");
const CustomerContact = require("./src/templates/CustomerContact.cjs");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Nodemailer Transporter
const smtpTransporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Function to generate email HTML from React component
const generateEmailHTML = (Component, props) => {
  return ReactDOMServer.renderToStaticMarkup(React.createElement(Component, props));
};

// Booking Form Submission with Email Notification
app.post("/submit_form", async (req, res) => {
  try {
    const { name, email, checkin, checkout, guests, children } = req.body;

    if (!name || !email || !checkin || !checkout || !guests) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    console.log("Booking request received:", req.body);

    // Save booking to MongoDB
    const newBooking = new mongoose.model("Enquiries", new mongoose.Schema({
      name: String,
      email: String,
      checkin: String,
      checkout: String,
      guests: Number,
      children: Number,
      createdAt: { type: Date, default: Date.now },
    }));

    await newBooking.create({ name, email, checkin, checkout, guests, children });
    console.log("Booking saved to MongoDB");

    // Generate email HTML
    const managerEmailHTML = generateEmailHTML(ManagerEmail, req.body);
    const customerEmailHTML = generateEmailHTML(CustomerEmail, req.body);

    // Send email to Manager
    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Admin email
      subject: "New Booking Received",
      html: managerEmailHTML,
    });
    console.log("Booking Enquiry email sent to Manager");

    // Send confirmation email to Customer
    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Booking Confirmation - Hotel Celebrations Pride",
      html: customerEmailHTML,
    });
    console.log("Booking confirmation email sent to customer");

    return res.sendFile(path.join(__dirname, "public", "static", "thankyou.html"));
  } catch (error) {
    console.error("Error handling booking request:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Contact Form Submission Endpoint
app.post("/submit_contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    console.log("Contact request received:", req.body);

    // Save contact message to MongoDB
    const newMessage = new mongoose.model("Contacts", new mongoose.Schema({
      name: String,
      email: String,
      phone: String,
      message: String,
      createdAt: { type: Date, default: Date.now },
    }));

    await newMessage.create({ name, email, phone, message });
    console.log("Contact message saved to MongoDB");

    // Generate email HTML
    const managerContactEmailHTML = generateEmailHTML(ManagerContact, req.body);
    const customerContactEmailHTML = generateEmailHTML(CustomerContact, req.body);

    // Send email to Manager
    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Admin email
      subject: "New Contact Inquiry",
      html: managerContactEmailHTML,
    });
    console.log("Contact Inquiry email sent to Manager");

    // Send confirmation email to Customer
    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank You for Contacting Us",
      html: customerContactEmailHTML,
    });
    console.log("Contact confirmation email sent to customer");

    return res.sendFile(path.join(__dirname, "public", "static", "ContactSuccess.html"));
  } catch (error) {
    console.error("Error handling contact request:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));