export const getPatients =async () => {
    const res = await fetch('http://localhost:3000/api/patients/', {cache: 'no-store'})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
}