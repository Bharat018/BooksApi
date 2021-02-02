const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    qty:Number,
    owner:String
})


module.exports = mongoose.model("Book",schema);