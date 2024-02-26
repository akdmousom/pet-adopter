import MedicineForm from '@/components/medicineForm/MedicineForm'
import React from 'react'
const page = () => {
    return (
        <div className='pt-7'>
            <h3 className='text-3xl font-semibold text-center uppercase'>add medicine</h3>
            <p className='text-center pt-1 pb-10'>add new medicine to store</p>
            <MedicineForm />
        </div>
    )
}

export default page
