import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    age: {
        type:Number,
        required: true,
    },
    gender: String,
    phoneNumber: {
        type: Number,
        unique: true,
        required: true
    },
    status: {
        type: String,
        default: "new"
    },
    medicine: [String],
    findings: [String]
})

const Patient = mongoose.models.Patient || mongoose.model("patient", PatientSchema);
export default Patient