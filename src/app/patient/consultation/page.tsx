'use client'
import ConsultPatient from '@/components/ConsultPatient'
import SearchPatient from '@/components/SearchPatient'
import React, { useState } from 'react'

export default async function page() {
  const [data, setData] = useState(null)

  React.useEffect(()=>{
    fetch('/api/patients')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  },[])

  if (!data) return <p>No patients data</p>

  return (
    <div>
      <SearchPatient/>
      <ConsultPatient patients={data} />
    </div>
  )
}

