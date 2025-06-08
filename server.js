require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// Define Mongoose Schemas & Models Once (Prevents OverwriteModelError)
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  checkin: String,
  checkout: String,
  guests: Number,
  children: Number,
  createdAt: { type: Date, default: Date.now },
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

// Prevent OverwriteModelError
const Booking = mongoose.models.Enquiries || mongoose.model("Enquiries", bookingSchema);
const ContactMessage = mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

// Serve your legacy/static assets (thankyou.html, contact success, favicon, etc.) under "/static"
app.use('/static', express.static(path.join(__dirname, "public", "static")));

// Nodemailer Transporter
const smtpTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Set Contact Us link for local testing
const contactUsLink = "http://localhost:3000/contact"; // Change when deploying!

// Booking Form Submission with Email Notification
app.post("/submit_form", async (req, res) => {
  try {
    const { name, email, checkin, checkout, guests, children } = req.body;

    if (!name || !email || !checkin || !checkout || !guests) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    console.log("📩 Booking request received:", req.body);

    await Booking.create({ name, email, checkin, checkout, guests, children });
    console.log("✅ Booking saved to MongoDB");

    const CustomerEmail = require("./src/templates/CustomerEmail.cjs");
    const ManagerEmail = require("./src/templates/ManagerEmail.cjs");

    const managerEmailHTML = ManagerEmail(req.body);
    const customerEmailHTML = CustomerEmail({ ...req.body, contactUsLink });

    const logoPath = path.join(__dirname, "public", "favicon.ico");

    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "New Booking Received",
      html: managerEmailHTML,
      attachments: [{ filename: "logo.png", path: logoPath, cid: "logo" }],
    });
    console.log("📧 Booking Enquiry email sent to Admin");

    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_MANAGER,
      subject: "New Booking Received",
      html: managerEmailHTML,
      attachments: [{ filename: "logo.png", path: logoPath, cid: "logo" }],
    });
    console.log("📧 Booking Enquiry email sent to Manager");

    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Booking Confirmation - Hotel Celebrations Pride",
      html: customerEmailHTML,
      attachments: [{ filename: "logo.png", path: logoPath, cid: "logo" }],
    });
    console.log("📩 Booking confirmation email sent to customer");

    // Redirect or send thank you page from static assets
    return res.sendFile(path.join(__dirname, "public", "static", "thankyou.html"));
  } catch (error) {
    console.error("❌ Error handling booking request:", error);
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

    console.log("📩 Contact request received:", req.body);

    await ContactMessage.create({ name, email, phone, message });
    console.log("✅ Contact message saved to MongoDB");

    const ManagerContact = require("./src/templates/ManagerContact.cjs");
    const CustomerContact = require("./src/templates/CustomerContact.cjs");

    const managerContactEmailHTML = ManagerContact(req.body);
    const customerContactEmailHTML = CustomerContact({ ...req.body, contactUsLink });

    const logoPath = path.join(__dirname, "public", "favicon.ico");

    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "New Contact Inquiry",
      html: managerContactEmailHTML,
      attachments: [{ filename: "logo.png", path: logoPath, cid: "logo" }],
    });
    console.log("📧 Contact Inquiry email sent to Manager");

    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_MANAGER,
      subject: "New Contact Inquiry",
      html: managerContactEmailHTML,
      attachments: [{ filename: "logo.png", path: logoPath, cid: "logo" }],
    });
    console.log("📧 Contact Inquiry email sent to Manager");

    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank You for Contacting Us",
      html: customerContactEmailHTML,
      attachments: [{ filename: "logo.png", path: logoPath, cid: "logo" }],
    });
    console.log("📩 Contact confirmation email sent to customer");

    return res.sendFile(path.join(__dirname, "public", "static", "ContactSuccess.html"));
  } catch (error) {
    console.error("❌ Error handling contact request:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Serve React SPA build from /dist on root
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback: serve index.html for all other routes (except API and /static)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));