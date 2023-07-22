import connectMongoDB from "@/helper/db";
import Medicine from "@/models/Medicine";
import { NextRequest, NextResponse } from "next/server";

// get seleted medicine
export const GET =async (req:NextRequest, res: NextResponse) => {
        const id = req.url.split("medicines/")[1]
    try {
        await connectMongoDB();
        const medicine = await Medicine.findById(id);
        return NextResponse.json(medicine)
    } catch (error) {
        return NextResponse.json(error)
    }
}

// update medicine
export const PUT = async (req: NextRequest, res: NextResponse) => {
    const id = req.url.split("medicines/")[1]
    const {name, quantity, category, recommendedAge } = await req.json();
    try {
        await connectMongoDB() // connect to database
        await Medicine.findByIdAndUpdate(id, {name, quantity, category, recommendedAge}, {new: true})
        return NextResponse.json({ message: "Medicine Updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "failed to update the medicine" }, { status: 404 });
    }
}

// delete medicine
export const DELETE = async (req: NextRequest, res: NextResponse) => {
    const id = req.url.split("medicines/")[1]
    try {
        await connectMongoDB();
        await Medicine.findByIdAndDelete(id);
        return NextResponse.json({message: "medicine deleted"}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "failed to delete the medicine"}, {status: 404})
        
    }
  }