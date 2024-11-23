const express = require('express');
const  Prescription = require("../db/prescription");
const { User } = require("../db/db"); 

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
router.post('/confirmAppointments', async (req,res)=>{
      
});

module.exports = router;
