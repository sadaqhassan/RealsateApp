import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    atempts:{
        type:Number,
        default:0
    },
    lockedUntill:{
        type:Number
    },
},{timestamps:true});

export const USER = mongoose.model("user",userModel);