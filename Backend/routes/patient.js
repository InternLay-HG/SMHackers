const express = require('express');
const  Prescription = require("../db/prescription");
const { User } = require("../db/db"); 
const {Appointment} =require('../db/appointments')
const router = express.Router();

router.get('/prescription', async (req, res) => {
  try {
    const patientId = req.query.patientId;

    if (!patientId) {
      return res.status(400).json({ message: 'Patient ID is required' });
    }
    const prescriptions = await Prescription.find({ patient: patientId })
      .populate('doctor', 'firstName lastName') 
      .populate('patient', 'firstName lastName')

    if (!prescriptions || prescriptions.length === 0) {
      return res.status(404).json({ message: 'No prescriptions found for this patient' });
    }
    const formattedPrescriptions = prescriptions.map((prescription) => ({
      doctorName: `${prescription.doctor.firstName} ${prescription.doctor.lastName}`,
      patientName: `${prescription.patient.firstName} ${prescription.patient.lastName}`,
      medicines: prescription.medicines,
    }));

    res.status(200).json({ prescriptions: formattedPrescriptions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/doctors',async (req,res)=>{
    try{
      const doctors=await User.find({role:'doctor'});
      const formattedDoctors=doctors.map((doctor)=>({
        doctorName:`${doctor.firstName} ${doctor.lastName}`,
        id: doctor._id
      }));
      res.json({doctors:formattedDoctors});
    }
    catch(err){
      res.json(err);
    }
})
router.post('/bookappointments', async (req,res)=>{
      try{
        const { patientId, doctorId, appointmentDate, appointmentTime } = req.body;
         const patient=User.findById(patientId);
         const doctor=User.findById(doctorId);
         if (!patient || !doctor) {
          return res.status(404).json({ message: 'Patient or Doctor not found.' });
        }
        const newAppointment = new Appointment({
          patient: patientId,
          doctor: doctorId,
          patientName: `${patient.firstName} ${patient.lastName}`, // Fetch name from User model
          appointmentDate: new Date(appointmentDate),
          appointmentTime,
        });
    
        const savedAppointment = await newAppointment.save();
        res.status(201).json({
          message: 'Appointment booked successfully!',
          appointments: savedAppointment,
        });

      }
      catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
      }
});
router.get('/activeappointments',async (req,res)=>{
    try{
      const {patientId}=req.body;
        const myAppointments=await Appointment.find(patientId);
        res.json({
          message : 'Appointments fetched successfully',
          appointments: myAppointments
        })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message:'Server error', error: error.message});
    }
})

module.exports = router;
