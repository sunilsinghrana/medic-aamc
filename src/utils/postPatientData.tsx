
type NewPatientFormData = {
    name: string,
    lastName?: string,
    age: string,
    gender: string,
    phoneNumber: string
}

export default async function postPatientData(data: NewPatientFormData) {
  const { name, lastName, age, gender, phoneNumber} = data  
  
    const res = await fetch("/api/patients/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, lastName, age, gender, phoneNumber})
      
    });
    const body = await res.json();
    console.log(body);
    
    if (!res.ok) {
      throw new Error(body.data.error.message);
    }
  }