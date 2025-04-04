const mongoose = require('mongoose');;

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    otp:{
        type:Number,
    },
    role:{
        type:String,
        default:"user",
        enum:["user"],
    },
    purchaseProducts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
        },
    ],
},
{timestamps:true}
);

const User =mongoose.model("User",userSchema);
module.exports = User;