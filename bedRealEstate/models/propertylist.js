const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prolistSchema = new mongoose.Schema({
    owner: {
        type:Schema.Types.ObjectId,
        ref: 'user'},
    photos:[],
    price:Number,
    name:String,
    description:String,
    address:String,
    phone:String,
    area:String,
    bed:Number,
    bath:Number,
})

module.exports = mongoose.model('Property', prolistSchema)