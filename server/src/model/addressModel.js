const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    address:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false,

    }
});

module.exports = mongoose.model("Address", addressSchema);
