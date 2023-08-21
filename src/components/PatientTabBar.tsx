"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function PatientTabBar() {
  const pathName = usePathname();
  return (
    <nav className="py-4 px-2 flex md:flex-row flex-col gap-3 justify-around items-center dark:bg-[#27272A] bg-gray-200 overflow-hidden w-full dark:text-white text-black rounded-2xl">
      <div className="">
        <Link
          href={"/patient"}
          className={`${
            pathName === "/patient" ? "dark:bg-[#09090B] dark:bg-opacity-75 bg-white transition duration-500 ease-in-out " : "hover:dark:bg-black/20"
          } px-4 py-1 md:px-8 md:py-3 md:rounded-xl font-bold tracking-wide`}
        >
          Register
        </Link>
      </div>
      <div>
        <Link
          href={"/patient/consultation"}
          className={`${
            pathName === "/patient/consultation" ? "dark:bg-[#09090B] bg-white transition duration-500 ease-in-out" : "hover:dark:bg-black/20"
          } px-4 py-1 md:px-8 md:py-3 md:rounded-xl font-bold tracking-wide`}
        >
          {" "}
          Consultation
        </Link>
      </div>
    </nav>
  );
}

export default PatientTabBar;
