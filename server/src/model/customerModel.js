const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema ( {
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    // image:{
    //     type:Image,
    // },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false,

    }

})

module.exports = mongoose.model("Customer", customerSchema);