
const mongoose = require('mongoose');
const env=require('dotenv');
const { number } = require('zod');
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

const OrgansiationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    organsiation :String,
    organsiationId: {
        type: Number,
        unique: true
    }
})
const User = mongoose.model('User', userSchema);
const Details= mongoose.model('Details',detailSchema);
const Organsiation=mongoose.model('Organisation',OrgansiationSchema);
module.exports = {
	User,
    Details,
    Organsiation
};