
const express = require('express');

const router = express.Router();
const zod = require("zod");
const { User, Details } = require("../db/db.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");
const {getUserLocation} = require('../apis/hospital.js');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string().min(1, "First name is required."),
    lastName: zod.string().min(1, "Last name is required."),
    password: zod.string().min(6, "Password must be at least 6 characters long."),
    pincode: zod.number().int().min(100000, "Pincode must be a 6-digit number.").max(999999, "Pincode must be a 6-digit number."),
    state: zod.string().min(2, "State must be at least 2 characters long."),
    city: zod.string().min(2, "City must be at least 2 characters long."),
    address: zod.string().min(5, "Address must be at least 5 characters long."),
    role: zod.string().min(3,"Role is required")
});

const getHospitals = require('../apis/hospital.js');
const Appointment = require('../db/appointments.js');
const Prescription = require('../db/prescription.js');

router.get('/location', async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }
    getHospitals(lat, lon, req, res); 
});

router.post("/signup", async (req, res) => {
    const { success, error } = signupBody.safeParse(req.body);
    if (!success) {
      console.log("Validation Error:", error.errors);
      return res.status(411).json({
        message: "Incorrect inputs",
        errors: error.errors
      });
    }
  
    const existingUser = await User.findOne({ username: req.body.username });
  
    if (existingUser) {
      return res.status(411).json({
        message: "Email already taken / Incorrect inputs"
      });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      const user = await User.create({
        username: req.body.username,
        password: hashedPassword, 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pincode: req.body.pincode,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
        role: req.body.role
      });
  
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
  
      res.json({
        message: "User created successfully",
        userid: user._id,
        role: user.role,
        token: token
      });
    } catch (err) {
      console.error("Error during signup:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})
  router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Incorrect inputs"
      });
    }
  
    try {
      const user = await User.findOne({ username: req.body.username });
  
      if (user) {
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordValid) {
          const token = jwt.sign({ userId: user._id }, JWT_SECRET);
          res.json({
            token: token,
            userid: user._id,
            role:user.role,
            message: "User signed in successfully"
          });
          return;
        }
      }
  
      res.status(411).json({
        message: "Invalid username or password"
      });
    } catch (err) {
      console.error("Error during signin:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  router.get("/getDetails", async (req, res) => {
    try {
      const patientId = req.query.patientId;
  
      if (!patientId) {
        return res.status(400).json({ message: "Patient ID is required" });
      }
  
      const appointmentData = await Appointment.find({ patient: patientId }).sort({
        appointmentDate: 1,
        appointmentTime: 1,
      });
  
      const medicineData = await Prescription.find({ patient: patientId });
  
      const detailsData = await Details.find({ userId: patientId });
      const result = {
        appointments: appointmentData.length > 0 ? appointmentData : "No appointments found",
        reminder: medicineData.length > 0 ? medicineData : "No medicine reminders found",
        details: detailsData.length > 0 ? detailsData : "No additional details found",
      };
  
      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (err) {
      console.error("Error fetching patient details:", err);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching details",
        error: err.message,
      });
    }
  });
  
  router.post('/unique-signup', async (req, res) => {
    const { email } = req.body;
  
    try {
      const existingUser = await User.findOne({username:email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      const newUser = new User({ email });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
module.exports = router;