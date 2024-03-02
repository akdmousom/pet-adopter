
"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Swal from 'sweetalert2';
const AdoptRequest = () => {
    const router = useRouter()
    const [adoptData, setAdoptData] = useState([])
    useEffect(() => {
        axios.get('https://pet-adopter-backend.vercel.app/api/v1/adoptrequest')
            .then(res => setAdoptData(res.data))
    }, [])
    const approveRequest = (id) => {
        Swal.fire({
            title: "approve Request?",
            text: "You wants to approve this request?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`https://pet-adopter-backend.vercel.app/api/v1/adoptrequest?id=${id}`, { status: 'approved' })
                    // axios.put(`http://localhost:5000/api/v1/adoptrequest?id=${id}`)
                    .then(res => {
                        if (res?.data?.acknowledged) {
                            router.refresh()
                            Swal.fire({
                                title: "approved!",
                                text: "request approved",
                                icon: "success"
                            });
                        }

                        // console.log(res.data)
                    })

            }
        });
    }
    const RejectRequest = (id) => {
        Swal.fire({
            title: "reject Request?",
            text: "You wants to reject this request?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                // axios.put(`http://localhost:5000/api/v1/adoptrequest?id=${id}`, { status: 'rejected' })
                axios.put(`https://pet-adopter-backend.vercel.app/api/v1/adoptrequest?id=${id}`, { status: 'rejected' })
                    .then(res => {
                        if (res?.data?.acknowledged) {
                            router.refresh()
                            Swal.fire({
                                title: "rejected!",
                                text: "request rejected",
                                icon: "success"
                            });
                        }
                        console.log(res.data)
                    })

            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto my-16 mx-5 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg font-semibold'>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Pet Name</th>
                            <th>Pet Category</th>
                            <th>statud</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            adoptData.map((data, index) =>
                                <tr key={data._id} className="hover ">
                                    <th>{index + 1}</th>
                                    <td>{data?.user?.name} </td>
                                    <td>{data?.user?.email}</td>
                                    <td>{data?.pet?.petName}</td>
                                    <td>{data?.pet?.petCategory}</td>
                                    <td className={`${data?.status === 'approved' ? 'text-green-500' : data?.status === 'rejected' ? 'text-red-500 font-bold' : 'text-orange-500'} font-semibold`}>
                                        {
                                            data?.status ? data?.status : "pendding"
                                        }
                                    </td>
                                    <td >
                                        {
                                            (data?.status === 'approved' || data?.status === 'rejected') ?<span className={`${data?.status === 'approved' ? 'text-green-500' : data?.status === 'rejected' && 'text-red-500 font-bold' } font-semibold uppercase`}>
                                                { data?.status }
                                            </span>: <span className='flex justify-center items-center gap-3'>
                                                <FaCheck onClick={() => approveRequest(data._id)} title='approve' className='active:scale-95 hover:scale-110 text-2xl text-green-500 cursor-pointer' />
                                                <IoClose onClick={() => RejectRequest(data._id)} className='active:scale-95 hover:scale-110 text-2xl text-red-500 cursor-pointer' />
                                            </span>
                                        }

                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdoptRequest;