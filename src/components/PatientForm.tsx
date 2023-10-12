"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import postPatientData from "@/utils/postPatientData";

function PatientForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function doReset() {
    setName("");
    setLastName("");
    setAge("");
    setGender("");
    setPhoneNumber("");
  }

  const addPatient = (event: FormEvent<HTMLFormElement>, data: any) => {
    event.preventDefault();
    try {
      postPatientData(data);
      doReset();
    } catch (error) {
      alert("something went wrong while posting patient data");
    }
  };

  return (
    <section className="border border-gray-300 dark:border-gray-500 px-5 py-8 w-full md:w-1/2 md:m-auto bg-[#F7F8FC] dark:bg-[#11111D]">
      <div className="m-5 text-center">
        <h1 className="my-5 font-bold">Register Patient</h1>
        <hr className="w-full" />
      </div>
      <form
        className="flex flex-col justify-around items-center"
        onSubmit={(e) =>
          addPatient(e, {
            name: name,
            lastName: lastName,
            age: parseInt(age),
            gender: gender,
            phoneNumber: parseInt(phoneNumber),
          })
        }
        id="submitForm"
      >
        <div className="flex md:flex-row flex-col justify-around items:start md:items-center my-2 w-full">
          <div className="flex flex-col justify-evenly items-center md:items-start my-2 w-full">
            <Input
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              className="border border-gray-500 w-[80%] rounded-md h-12"
              placeholder="Enter First Name"
              required
              minLength={4}
            />
          </div>
          <div className="flex flex-col justify-evenly items-center md:items-end my-2 w-full">
            <Input
              type="text"
              value={lastName}
              onChange={(e: any) => setLastName(e.target.value)}
              className="border border-gray-500 w-[80%] rounded-md h-12"
              placeholder="Enter Last Name"
              minLength={3}
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-around  items:start md:items-center my-2 w-full">
          <div className="flex flex-col justify-evenly items-center md:items-start my-2 w-full">
            <Input
              type="number"
              value={age}
              onChange={(e: any) => setAge(e.target.value)}
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-gray-500 w-[80%] rounded-md h-12"
              placeholder="Enter Age"
              required
              min={1}
              max={99}
            />
          </div>
          <div className="flex flex-col justify-evenly items-center md:items-end my-2 w-full">
            <select
              value={gender}
              onChange={(e: any) => setGender(e.target.value)}
              name="gender"
              placeholder="Select gender"
              className="bg-[#F7F8FC] dark:bg-[#11111D] border border-gray-500 text-gray-900 text-sm rounded-md w-[80%] h-12 focus-within:outline-none dark:text-white"
            >
              <option value="select">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-start my-4 w-4/5">
          <label htmlFor="number" className="my-1">
            Patient Phone Number
          </label>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-gray-500 w-full h-12 rounded-md"
            placeholder="Enter Phone Number"
            required
            maxLength={12}
            minLength={10}
          />
        </div>
        <div className="md:text-right text-center mx-5">
          <button
            type="submit"
            className="border hover:bg-sky-600 bg-sky-500 dark:border-white dark:text-white text-white hover:text-white font-bold px-4 py-1 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default PatientForm;
