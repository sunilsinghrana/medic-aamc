import React, { FormEvent, Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import SelectMedicineCat from "../SelectMedicineCat";
import SelectMedicineNId from "../SelectMedicineNId";
import { MedicineExpiry } from "../MedicineExpiry";
import MedicineQuantity from "../MedicineQuantity";
import sendMedicineData from "@/utils/postMedicineDate";

function MedicineDialog({ closeModal, Dialog, Transition, isOpen }: any) {
  const router = useRouter();

  const [medicineId, setMedicineId] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [medicineCat, setMedicineCat] = useState("");
  const [medicineExpiry, setMedicineExpiry] = useState("");
  const [medicineQty, setMedicineQty] = useState("");

  function doReset() {
    setMedicineId("");
    setMedicineName("");
    setMedicineCat("");
    setMedicineExpiry("");
    setMedicineQty("");
  }

  async function addMedicine(event: FormEvent<HTMLFormElement>, data: any) {
    event.preventDefault();
    try {
      sendMedicineData(data);
      doReset();
      router.refresh();
    } catch (error) {
      alert("something went wrong while posting medicine data");
    }
    console.log(data);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[40rem] transform overflow-hidden rounded-2xl bg-[#F7F8FC] dark:bg-[#11111D] p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6  dark:text-white text-black md:text-left text-center"
                >
                  Add Medicine
                </Dialog.Title>
                <div className="mt-2 md:text-left text-center">
                  <p className="text-sm text-gray-500">
                    Add new Medicine to your inventory.
                  </p>
                </div>

                <form
                  onSubmit={(e) =>
                    addMedicine(e, {
                      medicineId: medicineId,
                      name: medicineName,
                      category: medicineCat,
                      expiry: medicineExpiry,
                      quantity: medicineQty,
                    })
                  }
                >
                  <div className="grid gap-4 py-4">
                    {/* for Medicine id and medicine name */}
                    <SelectMedicineNId
                      medicineId={medicineId}
                      setMedicineId={setMedicineId}
                      medicineName={medicineName}
                      setMedicineName={setMedicineName}
                    />
                    {/* for selecting category of medicine */}
                    <SelectMedicineCat
                      medicineCat={medicineCat}
                      setMedicineCat={setMedicineCat}
                    />
                    <div className="flex flex-col md:flex-row justify-evenly md:justify-between items-center">
                      {/* for expiry date */}
                      <MedicineExpiry setMedicineExpiry={setMedicineExpiry} />
                      {/* for medicine quantity */}
                      <MedicineQuantity
                        setMedicineQty={setMedicineQty}
                        medicineQty={medicineQty}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className={`border dark:hover:bg-[#070711] hover:bg-[#319780] bg-[#319795] dark:border-white dark:text-white text-white hover:text-white font-bold px-4 py-1 rounded-lg`}
                      onClick={closeModal}
                    >
                      ADD
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default MedicineDialog;
