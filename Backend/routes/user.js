
const express = require('express');

const router = express.Router();
const zod = require("zod");
const { User } = require("../db/db.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const {getUserLocation} = require('../apis/hospital.js');

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

router.get('/location', async (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    console.log(`Received location: Latitude: ${latitude}, Longitude: ${longitude}`);
    res.json({ message: "Location data received successfully", latitude, longitude });
});
router.post("/signup", async (req, res) => {
    const { success, error } = signupBody.safeParse(req.body);
if (!success) {
  console.log("Validation Error:", error.errors); 
  return res.status(411).json({
    message: "Incorrect inputs",
    errors: error.errors  // Optionally, send back the specific error messages for debugging
  });
}

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        pincode: req.body.pincode,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
        role: req.body.role

    })
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token ,
            message: "user signed successfully"
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})

module.exports = router;