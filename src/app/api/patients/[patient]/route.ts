import connectMongoDB from "@/helper/db";
import Patient from "@/models/PatientSchema";
import { NextRequest, NextResponse } from "next/server";

// get seleted Patient
export const GET =async (req:NextRequest, res: NextResponse) => {
        const id = req.url.split("patients/")[1]
    try {
        await connectMongoDB();
        const patient = await Patient.findById(id);
        return NextResponse.json(patient)
    } catch (error) {
        return NextResponse.json(error)
    }
}

// update Patient
export const PUT = async (req: NextRequest, res: NextResponse) => {
    const id = req.url.split("patients/")[1]
    const {name, age, gender, phoneNumber, medicine, findings } = await req.json();
    try {
        await connectMongoDB() // connect to database
        await Patient.findByIdAndUpdate(id, {name, age, gender, phoneNumber, medicine, findings}, {new: true})
        return NextResponse.json({ message: "Patient Updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "failed to update the Patient" }, { status: 404 });
    }
}

// delete Patient
export const DELETE = async (req: NextRequest, res: NextResponse) => {
    const id = req.url.split("patients/")[1]
    try {
        await connectMongoDB();
        await Patient.findByIdAndDelete(id);
        return NextResponse.json({message: "Patient deleted"}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "failed to delete the Patient"}, {status: 404})
        
    }
  }