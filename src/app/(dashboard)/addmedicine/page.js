import MedicineForm from '@/components/medicineForm/MedicineForm'
import { auth } from '@/app/api/auth';
import { redirect } from 'next/navigation';
import React from 'react'
const page = async() => {
    const session = await auth();
    if (!session?.user || session?.user?.role !=='admin') {
        redirect('/')
    }
    return (
        <div className='pt-7'>
            <h3 className='text-3xl font-semibold text-center uppercase'>add medicine</h3>
            <p className='text-center pt-1 pb-10'>add new medicine to store</p>
            <MedicineForm />
        </div>
    )
}

export default page
