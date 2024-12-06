const mongoose = require('mongoose')
const {Schema} = mongoose;

const loginSchema = new Schema({
    text:String,
    pass:String,
})
module.exports = mongoose.model('Test',loginSchema)