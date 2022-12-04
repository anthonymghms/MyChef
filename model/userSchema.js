import mongoose from "mongoose";
import Catalog from './catalogSchema';

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    items:{
        type:[]
    }
})

module.exports = mongoose.models.User || mongoose.model('User',userSchema)
