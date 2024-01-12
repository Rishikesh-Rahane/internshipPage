import mongoose from "mongoose"

const formdataModel = new mongoose.Schema({
    profile:String,
    subprofile:String,
    resume:{
        data:Buffer,
        contentType:String,
    },
    college:String,
    rating:String,
    subrating:String,
    description:String,
    startimmediately:String,
    email:String,
    mobile:Number,
});

export const FormData = mongoose.models.formdata || mongoose.model("formdata",formdataModel);