"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";
import MedicineDialog from "../dialog/MedicineDialog";

function SearchBar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="md:w-full  h-20 flex flex-col md:flex-row items-center justify-around mt-4">
      {/* search bar */}
      <div className="pt-2 my-1 relative">
        <div className="absolute left-0 top-0 mt-6 ml-3 mr-4">
          <BiSearch />
        </div>
        <input
          className="border-2 border-gray-400 dark:border-gray-800 bg-transparent h-12 w-[20rem] md:w-[30rem] px-10 pr-2 rounded-xl text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
      {/* Add new medicine */}
      <div className="my-2">
        <button
          type="button"
          className="border-2  dark:hover:bg-[#070711] hover:bg-[#319780] bg-[#319795] text-white px-4 py-2 rounded-xl"
          onClick={openModal}
        >
          Add Medicine
        </button>
        <MedicineDialog
          closeModal={closeModal}
          Dialog={Dialog}
          Transition={Transition}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}

export default SearchBar;
