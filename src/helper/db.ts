import mongoose from "mongoose";

const connectMongoDB = ()=> {
    try {
        mongoose.connect(process.env.DATABASE_URL as string)
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;