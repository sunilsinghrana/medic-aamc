import React from "react";
import { Input } from "./ui/input";

function MedicineQuantity({setMedicineQty, medicineQty}:any) {
  return (
    <div className="">
      <Input
        type="number"
        name="quantity"
        placeholder="Medicine Quantity"
        className="w-60 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-gray-500 my-2"
        max={10000}
        value={medicineQty}
        onChange={e => setMedicineQty(e.target.value)}
      />
    </div>
  );
}

export default MedicineQuantity;
