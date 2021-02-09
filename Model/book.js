const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,      
        minlength:3
    },
    qty:{
        type:Number,
        required:true,
        min:2
    },
    authors:{
        type:Array

    },
    address:{
        add1:{
            type:String
        },
        add2:{
            type:String
        }
    }
},{timestamps:true});


module.exports = mongoose.model("Book",schema);