import connectMongoDB from "@/helper/db";
import Patient from "@/models/PatientSchema";
import { NextRequest, NextResponse } from "next/server";


// Get all patients
export const GET =async (req:NextRequest, res: NextResponse) => {
    try {
        await connectMongoDB(); 
        const patient = await Patient.find();
        return NextResponse.json(patient)
    } catch (error) {
        return NextResponse.json({message: "failed to get patients", error})
    }
}

// Create new patient
export const POST =async (req:NextRequest, res: NextResponse) => {
    const { name, age, gender, phoneNumber } = await req.json();
    try {
        await connectMongoDB();
        const newPatient = await Patient.create({name, age, gender, phoneNumber})
        return NextResponse.json(newPatient)
    } catch (error) {
        return NextResponse.json(error)
    }
}