import connectMongoDB from "@/helper/db";
import Medicine from "@/models/Medicine";
import { NextRequest, NextResponse } from "next/server";

// Get all medicines
export const GET =async (req:NextRequest, res: NextResponse) => {
    try {
        await connectMongoDB();
        const medicines = await Medicine.find();
        return NextResponse.json(medicines)
    } catch (error) {
        return NextResponse.json(error)
    }
}

// Create new medicine
export const POST =async (req:NextRequest, res: NextResponse) => {
    const { name, quantity, category, recommendedAge } = await req.json();
    try {
        await connectMongoDB();
        const newMedicine = await Medicine.create({name, quantity, category, recommendedAge})
        return NextResponse.json(newMedicine)
    } catch (error) {
        return NextResponse.json(error)
    }
}

// Delete selected medicine
export const DELETE = async (req: NextRequest, res: NextResponse) => {
    const id = req.nextUrl.searchParams.get("id");
    // const id = req.url.split("workouts/")[1]
    console.log(id);
      try {
          await connectMongoDB();
          await Medicine.findByIdAndDelete(id);
          return NextResponse.json({message: "Medicine deleted"}, {status:200})
      } catch (error) {
          return NextResponse.json({message: "failed to delete medicie"}, {status: 404})
          
      }
  }