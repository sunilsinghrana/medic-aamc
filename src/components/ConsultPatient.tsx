"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Dialog, Transition } from "@headlessui/react";
import PrescribeDialog from "./dialog/PrescribeDialog";

function ConsultPatient() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function getCorrectDate(date: string) {
    let newDate = date.slice(0, 10);
    return newDate;
  }

  React.useEffect(() => {
    fetch("/api/patients")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p className="my-5">Loading...</p>;
  if (!data) return <p>No patients data</p>;

  return (
    <>
      <ScrollArea className="border-2 border-gray-800 px-3 h-[58rem] md:h-[40rem]">
        {data &&
          data.map((patient: any) => (
            <Accordion type="single" collapsible key={patient._id}>
              <AccordionItem
                value="item-1"
                className={`flex flex-col dark:hover:bg-gray-900 relative justify-start items-center w-full py-4 my-4 border-gray-400 dark:border-gray-500 border px-5`}
              >
                <main className="flex md:flex-row flex-col w-full">
                  <div className="w-24 h-24 bg-gray-500 flex justify-center items-center mx-3">
                    <Image
                      width={50}
                      height={50}
                      src="/user_icon.png"
                      alt="userImage"
                    />
                  </div>
                  <div className="flex flex-col justify-around items-start w-full mx-4">
                    <div className="flex md:flex-row flex-col justify-between items-start md:items-center w-full">
                      <span>
                        <h1>Name: {patient.name}</h1>
                      </span>
                      <span>
                        <h1>Ph: {patient.phoneNumber}</h1>
                      </span>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between items-start md:items-center w-full">
                      <span>
                        <p>register on: {getCorrectDate(patient.createdAt)}</p>
                      </span>
                      <span>
                        <p className="mt-6">
                          last visited: {getCorrectDate(patient.updatedAt)}
                        </p>
                        <AccordionTrigger className="">
                          see prescription
                        </AccordionTrigger>
                      </span>
                    </div>
                  </div>
                </main>
                <AccordionContent>
                  <div className="my-2">
                    Findings:
                    {patient.findings.length === 0 ? " N/A" : patient.findings}
                  </div>
                  <div className="my-2">
                    Medicine:
                    {patient.medicine.length === 0 ? " N/A" : patient.medicine}
                  </div>
                  <button
                    className="border hover:bg-sky-600 bg-sky-500 dark:border-white dark:text-white text-white hover:text-white font-bold px-4 py-1 rounded-lg my-2"
                    onClick={openModal}
                  >
                    {patient.findings.length === 0 &&
                    patient.medicine.length === 0
                      ? "consult"
                      : "Edit"}
                  </button>
                  <PrescribeDialog
                    closeModal={closeModal}
                    Dialog={Dialog}
                    Transition={Transition}
                    isOpen={isOpen}
                  />
                </AccordionContent>
                <div className="absolute right-0 bottom-0 w-4 h-full bg-red-600 border border-red-600"></div>
              </AccordionItem>
            </Accordion>
          ))}
      </ScrollArea>
    </>
  );
}

export default ConsultPatient;
