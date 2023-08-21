'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ToggleModel from "./ToggleMode";

function Navbar() {
    const pathName = usePathname()
  return (
    <nav className="flex justify-between items-center h-16 px-3 w-full bg-[#FFFFFF] dark:bg-[#171721]">
      <div className="hidden md:block">
        <Link
          href={"/"}
          className="text-base text-center cursor-pointer font-bold text-blue-900 pb-4 w-full"
        >
          MEDIC
        </Link>
      </div>
      <div className="w-[80%] md:w-[50%] flex justify-around items-center flex-wrap">
        <Link href={'/'} className={`font-bold ${pathName === '/' ? 'border-b-2 border-green-700 text-green-700' : ""}`}>Home</Link>
        <Link href={'/patient'} className={`font-bold ${pathName === '/patient' ? 'border-b-2 border-green-700 text-green-700' : ""}`}>Patient</Link>
        <Link href={'/medicine'} className={`font-bold ${pathName === '/medicine' ? 'border-b-2 border-green-700 text-green-700' : ""}`}>Inventory</Link>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        <ToggleModel/>
      </div>
      <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
        <Image width={16} height={16} src={'/user_icon.png'} alt="userimage" />
      </div>
    </nav>
  );
}

export default Navbar;
