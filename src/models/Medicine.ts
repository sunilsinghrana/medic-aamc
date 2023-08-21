import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    medicineId: {
        type: String,
        unique: true,
        required: true
    },
    quantity: {
        type: String,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    recommendedAge: {
        type: Number,
    },
},{timestamps: true})

const Medicine = mongoose.models.Medicine || mongoose.model('Medicine', MedicineSchema);
export default Medicine;