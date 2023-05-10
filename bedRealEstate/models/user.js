const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    cpassword:String,
    phone:Number,
    role:String
})

module.exports = mongoose.model('UserData', userSchema)