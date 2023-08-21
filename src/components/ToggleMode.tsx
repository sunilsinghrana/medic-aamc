'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import {BsSunFill} from 'react-icons/bs'
import {BsMoonFill} from 'react-icons/bs'

export default function ToggleModel() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <div className={`w-10 h-10 flex justify-center items-center cursor-pointer rounded-2xl dark:hover:bg-gray-600 hover:bg-gray-200 lg:mx-1 md:mx-2`} 
    onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}
    >
        {theme=='light' ?
        <BsMoonFill width={30} height={30} onClick={()=> {setTheme('dark');localStorage.setItem('theme', 'dark')}}/> :
        <BsSunFill width={30} height={30} onClick={()=> {setTheme('light');localStorage.setItem('theme', 'light')}} />
        }
      </div>
  )
}
