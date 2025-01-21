
const mongoose = require('mongoose');
const env=require('dotenv')
env.config();
mongoose.connect(process.env.DB_URL);
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    pincode: Number,
    state: String,
    city: String,
    address: String,
    role: String
});

const detailSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    chronicDiseases: String,
    allergies: String
});
const User = mongoose.model('User', userSchema);
const Details= mongoose.model('Details',detailSchema);
module.exports = {
	User,
    Details
};