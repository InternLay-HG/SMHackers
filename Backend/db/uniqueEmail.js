const mongoose = require('mongoose');
const env=require('dotenv')
env.config();
mongoose.connect(process.env.DB_URL);

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
});

const EmailUser = mongoose.model('EmailUser', userSchema);

module.exports = EmailUser;