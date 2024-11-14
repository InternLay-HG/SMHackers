
const express = require('express');
const userRouter = require("./user");
const doctorRouter= require('./doctor')
const patientRouter=require('./patient')

const router = express.Router();

router.use("/user", userRouter);
router.use("/doctor",doctorRouter);
router.use('/patient',patientRouter);

module.exports = router;