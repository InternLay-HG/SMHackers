const express = require('express');
const router = express.Router();
const zod = require("zod");
const { User } = require("../db/db.js");
const {Prescription } = require("../db/prescription.js");

const prescriptionSchema = zod.object({
    doctor: zod.string().nonempty("Doctor ID is required"),
    patient: zod.string().nonempty("Patient ID is required"),
    medicines: zod.array(
        zod.object({
            name: zod.string().nonempty("Medicine name is required"),
            dosage: zod.string().nonempty("Dosage is required"),
            frequency: zod.string().nonempty("Frequency is required")
        })
    )
});

router.post('/prescription', async (req, res) => {
    try {
        const prescriptionData = prescriptionSchema.safeParse(req.body);

        const doctor = await User.findById(prescriptionData.doctor);
        const patient = await User.findById(prescriptionData.patient);

        if (!doctor || doctor.role !== 'doctor') {
            return res.status(400).json({ error: "Invalid doctor ID" });
        }
        if (!patient || patient.role !== 'patient') {
            return res.status(400).json({ error: "Invalid patient ID" });
        }
        const prescription = await Prescription.create({
            doctor: prescriptionData.doctor,
            patient: prescriptionData.patient,
            medicines: prescriptionData.medicines
        });
        res.status(201).json({ message: "Prescription created successfully", prescription });
    } catch (error) {
        if (error instanceof zod.ZodError) {
            return res.status(400).json({ error: error.errors });
        }
        res.status(500).json({ error: "An error occurred while creating the prescription" });
    }
});

module.exports = router;
