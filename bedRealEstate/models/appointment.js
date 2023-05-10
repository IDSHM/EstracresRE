const mongoose = require('mongoose');

const appointSchema = new mongoose.Schema({
    roles:String,
    name:String,
    email:String,
    date:Date,
    time: String
})

module.exports = mongoose.model('AppointData', appointSchema)