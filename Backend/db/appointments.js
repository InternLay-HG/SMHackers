const mongoose = require('mongoose');
const env=require('dotenv')
env.config();
mongoose.connect(process.env.DB_URL);

const AppointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  patientName: { type: String, required: true }, // Adding a direct field for patient name
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true }, // Storing time separately
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;