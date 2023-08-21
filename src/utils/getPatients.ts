export const getPatients =async () => {
    const res = await fetch('https://medic-aamc-6i8q/api/patients/', {cache: 'no-store'})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
}