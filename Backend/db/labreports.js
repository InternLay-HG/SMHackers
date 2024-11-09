const mongoose = require('mongoose');

const labReportsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // other fields for lab reports, e.g., test results, date
  reportDetails: String,
  createdAt: { type: Date, default: Date.now },
});

const LabReports = mongoose.model('LabReports', labReportsSchema);
module.exports = LabReports;