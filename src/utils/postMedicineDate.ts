
type NewPostFormData = {
    name: string,
    medicineId: string,
    category: string,
    expiry: string,
    quantity: string
    recommendedAge?: string 
}

export default async function sendMedicineData(data: NewPostFormData) {
  const {medicineId, name, category, expiry, quantity} = data  
  
    const res = await fetch("/api/medicines/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({medicineId, name:name, category, expiry, quantity})
      
    });
    const body = await res.json();
    if (!res.ok) {
      throw new Error(body.data.error.message);
    }
  }