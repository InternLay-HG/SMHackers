
const express = require('express');
const userRouter = require("./user");
const doctorRouter= require('./doctor')
const patientRouter = require('./patient')
const emailRouter = require('./email')
const adminRoutes=require('./administrator')


const router = express.Router();

router.use("/user", userRouter);
router.use("/doctor",doctorRouter);
router.use('/patient',patientRouter);
router.use('/email',emailRouter);
router.use('/administrator',adminRoutes);

module.exports = router;