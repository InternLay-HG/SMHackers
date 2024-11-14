const express = require('express');
const router = express.Router();
const zod = require('zod');
const multer = require('multer');
const { User } = require('../db/db.js');
const Prescription = require('../db/prescription.js');


const prescriptionSchema = zod.object({
  doctor: zod.string().nonempty('Doctor ID is required'),
  patient: zod.string().nonempty('Patient ID is required'),
  medicines: zod.array(
    zod.object({
      name: zod.string().nonempty('Medicine name is required'),
      dosage: zod.string().nonempty('Dosage is required'),
      frequency: zod.string().nonempty('Frequency is required'),
    })
  ),
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Handle prescription creation
router.post('/prescription', async (req, res) => {
  try {
    const prescriptionData = prescriptionSchema.safeParse(req.body);

    if (!prescriptionData.success) {
      return res.status(400).json({ error: prescriptionData.error.errors });
    }

    const doctor = await User.findById(prescriptionData.data.doctor);
    const patient = await User.findById(prescriptionData.data.patient);

    if (!doctor || doctor.role !== 'doctor') {
      return res.status(400).json({ error: 'Invalid doctor ID' });
    }
    if (!patient || patient.role !== 'patient') {
      return res.status(400).json({ error: 'Invalid patient ID' });
    }

    const prescription = await Prescription.create({
      doctor: prescriptionData.data.doctor,
      patient: prescriptionData.data.patient,
      medicines: prescriptionData.data.medicines,
    });
    console.log(prescription);
    res.status(201).json({ message: 'Prescription created successfully', prescription });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while creating the prescription' });
  }
});

// Handle lab report creation with file upload
router.post('/labreport', upload.single('pdfFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Dynamically import mime to get mime type
    const mime = await loadMime();
    // Dynamically import Labreport and PDFModel from the database
    const { PDFModel } = require('../db/labreports.js');
    const { Labreport } = require('../db/labreports.js');

    // Create the PDF file in the database
    const pdfFile = await PDFModel.create({
      filename: req.file.originalname,
      contentType: mime.getType(req.file.originalname), // Use mime.getType dynamically
      file: req.file.buffer,
    });

    // Create the lab report and link it to the uploaded PDF
    const labreport = new Labreport({
      pdfFileId: pdfFile._id,
    });

    await labreport.save();

    res.status(201).json({
      message: 'PDF uploaded and lab report created successfully',
      labreport,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while uploading the PDF' });
  }
});

module.exports = router;
