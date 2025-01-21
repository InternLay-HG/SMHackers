const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const PrescriptionSchema = new mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    medicines: [
        {
            name: String,
            dosage: String,
            frequency: String,
        }
    ],
    date: { type: Date, default: Date.now } 
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

module.exports = Prescription;
