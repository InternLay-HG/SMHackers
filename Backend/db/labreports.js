const mongoose = require('mongoose');
const gridfs = require('mongoose-gridfs');


const { model: PDFModel } = gridfs({
  collection: 'pdfFiles',
  model: 'PDFFile',
  mongooseConnection: mongoose.connection,
});

const labreportSchema = new mongoose.Schema({
  pdfFileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PDFFile',
    required: true,
  },
});

module.exports = {
  Labreport: mongoose.model('Labreport', labreportSchema),
  PDFModel,
};