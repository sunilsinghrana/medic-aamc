import ConsultPatient from '@/components/ConsultPatient'
import SearchPatient from '@/components/SearchPatient'
import React from 'react'

export default async function page() {

  return (
    <div>
      <SearchPatient/>
      <ConsultPatient />
    </div>
  )
}

