'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
const DeleteItem = ({ itemId }) => {
    const router = useRouter()
    const deleteStoreItem = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await fetch(`https://pet-adopter-backend.vercel.app/api/v1/item/${id}`, {
                    method: 'DELETE',
                })
                const data = await res.json()
                router.refresh()
                // console.log(data)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    return <MdDelete onClick={() => deleteStoreItem(itemId)} className='hover:text-pink-500 active:scale-90 transition-all text-2xl hover:scale-105 cursor-pointer' />
}

export default DeleteItem
