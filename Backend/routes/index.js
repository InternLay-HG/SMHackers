
const express = require('express');
const userRouter = require("./user");
const doctorRouter= require('./doctor')
const patientRouter = require('./patient')
const emailRouter = require('./email')
const authRoutes = require('./authRoutes')



const router = express.Router();

router.use("/user", userRouter);
router.use("/doctor",doctorRouter);
router.use('/patient',patientRouter);
router.use('/email',emailRouter);
router.use('/authroutes',authRoutes);

module.exports = router;