
export const getMedicines =async () => {
    const res = await fetch('http://localhost:3000/api/medicines/', {cache: 'no-store'})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
    return res.json()
}
