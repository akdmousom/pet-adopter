'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
const UpdateOrder = ({ itemId, data, useremail, children }) => {
    const [loading, setloading] = useState(false)
    const router = useRouter()
    const deleteStoreItem = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You wants to ${data} this order`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {//http://localhost:500/  https://pet-adopter-backend.vercel.app
                setloading(true)
                const res = await axios.put(`https://pet-adopter-backend.vercel.app/api/v1/orders?id=${id}`, { status: data, email: useremail })
                setloading(false)
                router.refresh()
                console.log(res.data)
                Swal.fire({
                    title: `${data}`,
                    text: `Your order has been ${data}`,
                    icon: "success"
                });
            }
        });

    }
    return (<>
        {loading ? <span className="loading loading-spinner text-neutral"></span> : <button onClick={() => deleteStoreItem(itemId)} >{children}</button>}
    </>
    )
}

export default UpdateOrder
