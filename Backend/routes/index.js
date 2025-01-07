
const express = require('express');
const userRouter = require("./user");
const doctorRouter= require('./doctor')
const patientRouter = require('./patient')
const emailRouter = require('./email')



const router = express.Router();

router.use("/user", userRouter);
router.use("/doctor",doctorRouter);
router.use('/patient',patientRouter);
router.use('/email',emailRouter);

module.exports = router;