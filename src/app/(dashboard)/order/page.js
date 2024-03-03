import UpdateOrder from '@/Components/Order/DeleteOrder/UpdateOrder';
import { auth } from '@/app/api/auth';
import Image from 'next/image'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import { FaCheck, FaEdit } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
const page = async () => {
    const session = await auth();
    if (!session?.user) {
        redirect('/')
    }
    // const res = await fetch('http://localhost:5000/api/v1/orders/api/v1/orders', {https://pet-adopter-backend.vercel.app
    const res = await fetch('https://pet-adopter-backend.vercel.app/api/v1/orders', {
        cache: 'no-store'
    })
    const storeItems = await res.json()
    return (
        <div className='p-10'>
            <h3 className='uppercase font-semibold text-3xl text-center pb-5'>tolal order {storeItems?.length > 0 && <span>({storeItems.length})</span>}</h3>
            <div className="overflow-x-scroll">
                <table className="table">
                    <thead>
                        <tr >
                            <th className='font-bold uppercase text-base'>image</th>
                            <th className='font-bold uppercase text-base'>email</th>
                            <th className='font-bold uppercase text-base'>fullName</th>
                            <th className='font-bold uppercase text-base'>price</th>
                            <th className='font-bold uppercase text-base'>itemName</th>
                            <th className='font-bold uppercase text-base'>transID</th>
                            <th className='font-bold uppercase text-base'>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storeItems.length > 0 && storeItems?.map(item => <tr key={item?._id}>
                            <td >
                                <Image className='w-16 h-16 rounded-full' src={item?.image} height={500} width={500} alt='medicine image' />
                            </td>

                            <td className='w-[190px] min-w-[189px]'>{item?.email}</td>
                            <td>{item?.fullName}</td>
                            <td>${item?.price}</td>
                            <td className='w-[230px] min-w-[230px]'>{item?.itemName}</td>
                            <td className='w-[230px] min-w-[230px]'>{item?.transID}</td>
                            <td >
                                {/* updateitem */}
                                {
                                    item?.status === 'deliverd' ? 'deliverd' :session?.user?.role !=='admin'?'pending':<UpdateOrder itemId={item?._id} useremail={item?.email} data={'deliverd'} ><FaCheck className='hover:text-pink-500 active:scale-90 transition-all text-2xl hover:scale-105 cursor-pointer' /></UpdateOrder>
                                }
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page

