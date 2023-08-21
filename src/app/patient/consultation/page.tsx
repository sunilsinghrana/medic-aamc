import ConsultPatient from '@/components/ConsultPatient'
import SearchPatient from '@/components/SearchPatient'
import { getPatients } from '@/utils/getPatients'
import React from 'react'

export default async function page() {
  const patients = await getPatients()
  return (
    <div>
      <SearchPatient/>
      <ConsultPatient patients={patients} />
    </div>
  )
}

