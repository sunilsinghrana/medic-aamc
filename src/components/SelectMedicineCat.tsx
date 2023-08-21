import React from 'react'

function SelectMedicineCat({setMedicineCat, medicineCat}:any) {
  const getOption = (event:any) => {
    console.log(event.target.value)
    setMedicineCat(event.target.value)
  }
  return (
       <main className=''>
          <label htmlFor="medicineCat" className="block text-sm font-medium text-gray-900 dark:text-white md:text-left text-center">Select an option</label>
      <select id="medicineCat"  name='category' className="bg-[#F7F8FC] m-auto dark:bg-[#11111D] border border-gray-500 text-gray-900 text-sm rounded-lg block w-80 md:w-full p-2.5 dark:text-white" onChange={getOption} defaultValue={medicineCat}>
        <option value="select">Select Category</option>
        <option value="Tablet">Tablet</option>
        <option value="Syrup">Syrup</option>
        <option value="Capsules">Capsules</option>
        <option value="Cream">Cream</option>
        <option value="Lotion">Lotion</option>
      </select>
      </main> 
  )
}

export default SelectMedicineCat;
