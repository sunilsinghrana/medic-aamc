import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true
    },
    recommendedAge: {
        type: Number,
    },
})

const Medicine = mongoose.models.Medicine || mongoose.model('Medicine', MedicineSchema);
export default Medicine;