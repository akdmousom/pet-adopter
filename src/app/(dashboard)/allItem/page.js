import DeleteItem from '@/Components/AllItem/DeleteItem';
import Star from '@/Components/AllItem/Star';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDetails } from 'react-icons/md';
const page = async () => {
    // fetch store data
    const res = await fetch('https://pet-adopter-backend.vercel.app/api/v1/shopitems', {
        next: { revalidate: 5 }
    })
    const storeItems = await res.json()
    console.log(storeItems)
    return (
        <div className='p-10'>
            <h3 className='uppercase font-semibold text-3xl text-center pb-5'>store items {storeItems?.length > 0 && <span>({storeItems.length})</span>}</h3>
            <div className="overflow-x-scroll">
                <table className="table">
                    <thead>
                        <tr >
                            <th className='font-bold uppercase text-base'>image</th>
                            <th className='font-bold uppercase text-base'>name</th>
                            <th className='font-bold uppercase text-base'>category</th>
                            <th className='font-bold uppercase text-base'>price</th>
                            <th className='font-bold uppercase text-base'>description</th>
                            <th className='font-bold uppercase text-base'>rating</th>
                            <th className='font-bold uppercase text-base'>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storeItems?.map(item => <tr key={item?._id}>
                            <td >
                                <Image className='w-16 h-16 rounded-full' src={item?.image} height={500} width={500} alt='medicine image' />
                            </td>
                            <td className='w-[190px] min-w-[189px]'>{item?.name}</td>
                            <td>{item?.category}</td>
                            <td>${item?.price}</td>
                            <td className='w-[230px] min-w-[230px]'>{item?.description.slice(0, 50)}..</td>
                            <td className='w-[135px] min-w-[134px]'>
                                <Star ratings={item?.rating} />
                            </td>
                            <td >
                                {/* updateitem */}
                                <span className='flex justify-center items-center gap-2 text-2xl'>
                                    <Link href={`/updateitem?itemid=${item?._id}`}>
                                        <FaEdit className='hover:text-pink-500 active:scale-90 transition-all hover:scale-105 cursor-pointer' />
                                    </Link>
                                    <DeleteItem itemId={item?._id} />
                                    <Link href={`/item/medical/${item?._id}`}>
                                        <MdDetails className='hover:text-pink-500 active:scale-90 transition-all hover:scale-105 cursor-pointer' />
                                    </Link>
                                </span>
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
