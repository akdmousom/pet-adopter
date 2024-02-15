
"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdoptRequest = () => {
    const [adoptData, setAdoptData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/adoptrequest')
            .then(res => setAdoptData(res.data))
    }, [])
    console.log(adoptData);
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
                                    <td>
                                        pendding
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