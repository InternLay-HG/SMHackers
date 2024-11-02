
const mongoose = require('mongoose');
mongoose.connect("")
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    pincode: Number,
    state: String,
    city: String,
    address: String
});
const User = mongoose.model('User', userSchema);
module.exports = {
	User
};