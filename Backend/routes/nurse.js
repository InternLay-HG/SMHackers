const express = require('express');
const router = express.Router();
const Appointment =require('../db/appointments')

router.get('/viewappointments', async (req,res)=>{
    try{
        const patientId=req.body.id;
        if (!patientId) {
            return res.status(400).json({ message: 'Patient ID is required' });
        }
        const appointments=await Appointment.find({patient:patientId});
    }
    catch(err){
        res.json({message:'Failed to fetch patient Appointments'});
    }
});