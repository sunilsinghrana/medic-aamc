'use client'
import Image from "next/image";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

function ConsultPatient() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  React.useEffect(()=>{
    fetch('/api/patients')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  },[])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No patients data</p>

  return (
    <>
    <ScrollArea className="border-2 border-gray-800 px-3 h-[58rem] md:h-[40rem]"> 

      {data && data.map((patient: any) => (
        <React.Fragment key={patient._id}>
        <section
          className={`flex md:flex-row flex-col dark:hover:bg-gray-900 relative justify-start items-center w-full py-4 my-4 border-gray-400 dark:border-gray-500 border px-5`}
        >
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
                <p>register on: Aug 23</p>
              </span>
              <span>
                <p>last visited: Aug 23</p>
              </span>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-4 h-full bg-red-600 border border-red-600"></div>
          
        </section>
        </React.Fragment>
      ))}
        </ScrollArea>
    </>
  );
}

export default ConsultPatient;
