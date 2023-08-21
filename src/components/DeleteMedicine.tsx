'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
  
  
  
  function DeleteMedicine({medicineID}:any) {
    const router = useRouter()
    
    async function deleteMedicine(id: any) {
      const res = await fetch(`/api/medicines/${id}`, {
        method: "DELETE"
      });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.data.error.message);
      }
      router.refresh()
    }
    
  return (
    <AlertDialogContent className='bg-[#F7F8FC] dark:bg-[#11111D] text-black dark:text-white'>
    <AlertDialogHeader>
      <AlertDialogTitle>Do you really want to Delete?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your medicine
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=> deleteMedicine(medicineID)} className='border bg-red-500'>Yes</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
  )
}

export default DeleteMedicine
