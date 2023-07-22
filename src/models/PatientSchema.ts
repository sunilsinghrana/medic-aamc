import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    age: {
        type:Number,
        min: 1,
        max: 100,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'others'],
    },
    phoneNumber: {
        type: Number,
        required: true,
        min: [10, 'Phone number should contain at least ten digits!']
    },
    status: {
        type: String,
        enum: ['new', 'cst', 'dispense'],
        default: "new"
    },
    medicine: [String],
    findings: [String]
},{
    timestamps: true
})

const Patient = mongoose.models?.Patient || mongoose.model("Patient", PatientSchema);
export default Patient;