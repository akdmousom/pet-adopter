'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const MedicineForm = () => {
    const [loading, setloading] = useState(false)
    //react hook form elements
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
    // form submit function
    const onSubmit = async (data) => {
        // setloading(true)
        /*
                const res = await axios.post("https://api.imgbb.com/1/upload?key=5201d474546c521dc75dd9c96eea7a84", { image: data.foodimage[0] }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            data.foodimage = res.data.data.display_url
        */
   
        return
        ///   https://pet-adopter-backend.vercel.app http://localhost:5000
        const res = await fetch('https://pet-adopter-backend.vercel.app/api/v1/medicine', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (res.status) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "medicine added to store",
                showConfirmButton: false,
                timer: 1500
            });
        }
        setloading(false)
    }
    return (
        <form className='px-9 box-border' onSubmit={handleSubmit(onSubmit)}>
            <div className='lg:grid grid-cols-2 gap-3 mb-3'>
                <label><span className=' font-semibold uppercase '>pet Name</span>
                    <input type='text' className='p-3 w-full border' placeholder="name of pet" {...register("petName", { required: true })} />
                    {errors.petName && <span className='text-red-500'>pet name is required</span>}
                </label>
                <label><span className=' font-semibold uppercase'>medicine</span>
                    <input type='text' className='p-3 w-full border' placeholder="medicine name " {...register("medicine", { required: true })} />
                    {errors.medicine && <span className='text-red-500'>medicine is required</span>}
                </label>
                <label><span className=' font-semibold uppercase'>medicine expierd Date </span>
                    <input type='date' className='p-3 w-full border' placeholder="expierd Date" {...register("Exp_Date", { required: true })} />
                    {errors.Exp_Date && <span className='text-red-500'>medicine expierd Date is required</span>}
                </label>
                <label><span className=' font-semibold uppercase'>medicine manufacturing  Date </span>
                    <input type='date' className='p-3 w-full border' placeholder="expierd Date" {...register("Mfg_Date", { required: true })} />
                    {errors.Mfg_Date && <span className='text-red-500'>medicine manufacturing date is required</span>}
                </label>
                <label><span className=' font-semibold uppercase'>Intended Use</span>
                    <input type='text' className='p-3 w-full border' placeholder="Intended Use of this medicine" {...register("Intended_Use", { required: true })} />
                    {errors.Intended_Use && <span className='text-red-500'>Intended Use is required</span>}
                </label>
                <label><span className=' font-semibold uppercase'>side effects</span>
                    <input type='text' className='p-3 w-full border' placeholder="side effects of this medicine" {...register("side_effects", { required: true })} />
                    {errors.side_effects && <span className='text-red-500'>side effects is required</span>}
                </label>
            </div>
            <label><span className=' font-semibold uppercase'>medicine image </span>
                <input type='file' className='p-3 w-full border' placeholder="description for this medicine" {...register("medicine_img", { required: true })} />
                {errors.medicine_img && <span className='text-red-500'>description  is required</span>}
            </label>
            <label><span className=' font-semibold uppercase'>description </span>
                <textarea className='p-3 w-full border' placeholder="description for this medicine" {...register("description ", { required: true })} />
                {errors.description && <span className='text-red-500'>description  is required</span>}
            </label>
            <button type="submit" className='btn px-10 uppercase font-bold mt-3'>
                {loading ? 'loading...' : 'add to store'}
            </button>
        </form>
    )
}

export default MedicineForm
