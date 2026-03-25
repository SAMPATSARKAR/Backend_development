import mongoose from 'mongoose'
const catSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{timeseries:true})
export const CateSchema = mongoose.model("CateSchema",catSchema);