import React from "react";
import { Input } from "./ui/input";

function SelectMedicineNId({
  medicineId,
  setMedicineId,
  medicineName,
  setMedicineName,
}: any) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <label htmlFor="medicineId mb-2">Medicine Id</label>
        <Input
        tabIndex={0}
          type="number"
          name="medicineId"
          placeholder="Medicine Id"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-gray-500"
          value={medicineId}
          maxLength={6}
          onChange={(e: any) => setMedicineId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="medicineName mb-2">Medicine Name</label>
        <Input
        tabIndex={0}
          type="text"
          name="name"
          placeholder="Medicine name"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-gray-500"
          value={medicineName}
          maxLength={4}
          onChange={(e: any) => setMedicineName(e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default SelectMedicineNId;
