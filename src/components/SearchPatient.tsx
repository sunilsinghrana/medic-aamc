import React from 'react'

function SearchPatient() {
  return (
    <section className='w-full py-4 my-4 border border-gray-400 dark:border-gray-500'>
        <div className='flex items-end px-4 my-2'>
            <h1 className='mx-2'>Search Patient</h1>
            <input type="search" className='bg-[#F7F8FC] h-10 dark:bg-[#11111D] border-b border-gray-500 text-gray-900 text-sm rounded-md w-[80%] focus-within:outline-none dark:text-white' />
        </div>
    </section>
  )
}

export default SearchPatient
