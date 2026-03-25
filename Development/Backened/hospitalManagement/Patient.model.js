import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    diagonsedWith:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    bloodGroup:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital"
    }
},{})
export const user = mongoose.model("PatientSchema",UserSchema)