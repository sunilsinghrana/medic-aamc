'use client'
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { AlertDialog, AlertDialogTrigger } from "./ui/alert-dialog";
import DeleteMedicine from "./DeleteMedicine";

export default function MedicineInventory() {
  const [medicines, setMedicines] = useState([])
  const [isLoading, setLoading] = useState(true)

  React.useEffect(()=>{
    fetch('/api/medicines')
      .then((res) => res.json())
      .then((data) => {
        setMedicines(data)
        setLoading(false)
      })
  },[])

  if (isLoading) return <p>Loading...</p>
  if (!medicines) return <p>No profile data</p>

  return (
    <div className="container bg-transparent my-5">
      <ScrollArea className="h-[45rem] w-full rounded-md">
        <table className="text-gray-400 border-separate space-y-6 text-sm w-full">
          <thead className="bg-[#D2E9E9] dark:bg-[#171721]  text-gray-500">
            <tr>
              <th className="p-3 text-left">Medicine Id</th>
              <th className="p-3">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Expiry</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody className="">
            { medicines && medicines.map((medicine: any) => (
                <tr className="bg-[#D2E9E9] dark:bg-[#171721]" key={medicine._id}>
                  <td className="p-3 text-black dark:text-white">{medicine.medicineId}</td>
                  <td className="p-3">
                    <div className="flex align-items-center">
                      <div className="ml-3">
                        <div className="text-black dark:text-white">
                          {medicine.name}
                        </div>
                        <div className="text-gray-500">
                          Last updated: {medicine.updatedAt}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-black dark:text-white">
                    {medicine.category}
                  </td>
                  <td className="p-3 text-red-500 dark:text-red-300">
                    {medicine.expiry}
                  </td>
                  <td className="p-3 ">
                    <span className="text-black dark:text-white rounded-md px-2">
                      {medicine.quantity}
                    </span>
                  </td>
                  <td className="p-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-100 mx-2"
                    >
                      <i className="material-icons-outlined text-base text-blue-600">
                        edit
                      </i>
                    </a>
                    <AlertDialog>
                      <AlertDialogTrigger className="text-red-600 dark:hover:text-gray-100 hover:text-black ml-2" >
                        delete
                      </AlertDialogTrigger>
                      <DeleteMedicine medicineID={medicine._id} />
                    </AlertDialog>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </ScrollArea>
    </div>
  );
}
