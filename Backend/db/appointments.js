const mongoose = require('mongoose');
const env=require('dotenv')
env.config();
mongoose.connect(process.env.DB_URL);
const AppointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    appointmentDate: { type: Date, required: true },
    appointmentType: { type: String, enum: ['consultation', 'follow-up', 'check-up', 'emergency'], required: true },
    status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' },
    location: { type: String, default: 'clinic' }, // Can be 'clinic', 'hospital', 'online', etc.
    reason: { type: String },
    notes: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    paymentStatus: { type: String, enum: ['paid', 'pending'], default: 'pending' },
    appointmentTime: { type: String } // Optional, if time needs to be separated from the date
  });