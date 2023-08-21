type MedicineData = {
    name: string,
    medicineId: number,
    quantity: number,
    category: string,
    expiry: string,
    recommendedAge: number,
    createdAt: string,
    updatedAt: string
}

export type EditPostFormData = {
    medicineName: string,
    medicineId: number,
    medicineQty: number,
    medicineCat: string,
    medicineExpiry: string,
}

export default MedicineData;