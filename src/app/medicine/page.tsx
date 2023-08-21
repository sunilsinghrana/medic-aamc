'use client'
import MedicineInventory from '@/components/MedicineInventory';
import SearchBar from '@/components/medicine/SearchBar';
import React, { useState } from 'react';

export default async function page() {

  const [data, setData] = useState(null)

  React.useEffect(()=>{
    fetch('/api/medicines')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  },[])
  
    if (!data) return <p>No medicine data</p>
  return (
    <main className="flex flex-col items-center bg-[#F7F8FC] dark:bg-[#11111D] justify-between md:mx-6">
      <SearchBar/>
      <MedicineInventory medicines={data} />
    </main>
  )
}
