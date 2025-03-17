require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");

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

// submit_form API Endpoint Config

console.log("Loaded ENV Variables:");
console.log("REACT_APP_SUBMIT_FORM_URL:", process.env.REACT_APP_SUBMIT_FORM_URL);

if (!process.env.REACT_APP_SUBMIT_FORM_URL) {
  console.error("Configuration error. Contact admin.");
  process.exit(1);
}

// Define Mongoose Schema & Model
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  checkin: String,
  checkout: String,
  guests: Number,
  children: Number,
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Enquiries", bookingSchema);

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

// Read HTML Email Template
const emailTemplatePath = path.join(__dirname, "src", "templates", "ManagerEmail.html");
const emailTemplate = fs.readFileSync(emailTemplatePath, "utf8");

const customerTemplatePath = path.join(__dirname, "src", "templates", "CustomerEmail.html"); // For customer
const customerTemplate = fs.readFileSync(customerTemplatePath, "utf8");

// Booking Form Submission with Email Notification
app.post("/submit_form", async (req, res) => {
  try {
    const { name, email, checkin, checkout, guests, children } = req.body;

    if (!name || !email || !checkin || !checkout || !guests) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    console.log("Booking request received:", req.body);

    // Save booking to MongoDB
    const newBooking = new Booking({ name, email, checkin, checkout, guests, children });
    await newBooking.save();
    console.log("Booking saved to MongoDB");

    // Replace placeholders in email template
    let emailContent = emailTemplate
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{checkin}}", checkin)
      .replace("{{checkout}}", checkout)
      .replace("{{guests}}", guests)
      .replace("{{children}}", children);

    let customerEmailContent = customerTemplate
      .replace("{{name}}", name)
      .replace("{{checkin}}", checkin)
      .replace("{{checkout}}", checkout)
      .replace("{{guests}}", guests)
      .replace("{{children}}", children)
      .replace("{{email}}", email);

    // Email to Admin (Plain Text)
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Admin email
      subject: "New Booking Received",
      text: `
      New Booking Received:
      - Name: ${name}
      - Email: ${email}
      - Check-in: ${checkin}
      - Check-out: ${checkout}
      - Guests: ${guests}
      - Children: ${children}
      - Submitted at: ${new Date().toLocaleString()}
      `,
    };
    await smtpTransporter.sendMail(adminMailOptions);
    console.log("Notification email sent to admin");

    // Send confirmation email to Customer
    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, 
      subject: "Booking Enquiry - Hotel Celebrations Pride",
      html: emailContent,
      attachments: [{
        filename: "logo.png",
        path: path.join(__dirname, "public", "favicon.ico"), // Adjust the path as needed
        cid: "logo" // This ID should match the `cid:logo` in the HTML
      }]
    });
    console.log("Booking Enquiry email sent to Manager");    

    // Send confirmation email to Customer
    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: email, // Customer's email
      subject: "Booking Confirmation - Hotel Celebrations Pride",
      html: customerEmailContent,
      attachments: [{
        filename: "logo.png",
        path: path.join(__dirname, "public", "favicon.ico"), // Adjust the path as needed
        cid: "logo" // This ID should match the `cid:logo` in the HTML
      }]
    });
    console.log("Booking confirmation email sent to customer");

  // Serve Thank You Page
  return res.sendFile(path.join(__dirname, "public", "static", "thankyou.html"));
  } catch (error) {
    console.error("Error handling booking request:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// submit_contact API Endpoint Config
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Mongoose Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const ContactMessage = mongoose.model("Contacts", contactSchema);

// Read Email Templates
const managerContactTemplatePath = path.join(__dirname, "src", "templates", "ManagerContactEmail.html");
const managerContactTemplate = fs.readFileSync(managerContactTemplatePath, "utf8");

const customerContactTemplatePath = path.join(__dirname, "src", "templates", "CustomerContactEmail.html");
const customerContactTemplate = fs.readFileSync(customerContactTemplatePath, "utf8");

// **Contact Form Submission Endpoint**
app.post("/submit_contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    console.log("Contact request received:", req.body);

    // Save contact message to MongoDB
    const newMessage = new ContactMessage({ name, email, phone, message });
    await newMessage.save();
    console.log("Contact message saved to MongoDB");

    // Replace placeholders in email template for the manager
    let managerEmailContent = managerContactTemplate
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{phone}}", phone || "Not provided")
      .replace("{{message}}", message);

    // Replace placeholders in email template for the customer
    let customerEmailContent = customerContactTemplate
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{phone}}", phone || "Not provided")
      .replace("{{message}}", message);

    // Send email to Manager
    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Admin email
      subject: "New Contact Inquiry",
      html: managerEmailContent,
      attachments: [
        {
          filename: "logo.png",
          path: path.join(__dirname, "public", "favicon.ico"),
          cid: "logo",
        },
      ],
    });
    console.log("Contact Inquiry email sent to Manager");

    // Send confirmation email to Customer
    await smtpTransporter.sendMail({
      from: process.env.SMTP_USER,
      to: email, // Customer's email
      subject: "Thank You for Contacting Us",
      html: customerEmailContent,
      attachments: [
        {
          filename: "logo.png",
          path: path.join(__dirname, "public", "favicon.ico"),
          cid: "logo",
        },
      ],
    });
    console.log("Contact confirmation email sent to customer");

    // Serve Thank You Page for Contact Form
    const filePath = path.join(__dirname, "public", "static", "ContactSuccess.html");
    console.log("Serving ContactSuccess.html from:", filePath);

    return res.sendFile(filePath, (err) => {
      if (err) {
        console.error("Error sending ContactSuccess.html:", err);
        return res.status(500).send("Failed to load Contact Success Page.");
      }
    });

  } catch (error) {
    console.error("Error handling contact request:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));