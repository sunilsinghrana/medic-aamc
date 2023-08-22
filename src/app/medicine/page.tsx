import MedicineInventory from '@/components/MedicineInventory';
import SearchBar from '@/components/medicine/SearchBar';
import React from 'react';

export default async function page() {

  return (
    <main className="flex flex-col items-center bg-[#F7F8FC] dark:bg-[#11111D] justify-between md:mx-6">
      <SearchBar/>
      <MedicineInventory />
    </main>
  )
}
