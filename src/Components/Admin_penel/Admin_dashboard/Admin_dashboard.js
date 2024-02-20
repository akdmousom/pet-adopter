'use client'
import { useEffect, useState } from 'react';
import  axios  from 'axios';

const Admin_dashboard = () => {
  const [totalUser,setTotalUser]=useState(0)
  const [totalPost,setTotalPost]=useState(0)
  const [totalPet,setTotalPet]=useState(0)
  const [totalRequest,setTotalRequest]=useState(0)
  useEffect(()=>{
    axios.get('https://pet-adopter-backend.vercel.app/api/v1/getUserDataCount')
    .then(res=>{
      console.log(res.data.totalRegisterdUser,'data res')
      setTotalUser(res.data.totalRegisterdUser)
    })
    .catch(error=>console.log(error))
    
    axios.get('http://localhost:5000/api/v1/petCommunity')
    .then(res=>setTotalPost(res.data.length))
    .catch(error=>console.log(error))

    axios.get('http://localhost:5000/api/v1/petlistings')
    .then(res=>setTotalPet(res.data.length))
    .catch(error=>console.log(error))
    
    axios.get('http://localhost:5000/api/v1/adoptrequest')
    .then(res=>setTotalRequest(res.data.length))
    .catch(error=>console.log(error))
  },[])
    return (
        <div className=' lg:my-10 grid grid-cols-1 mx-2 lg:mx-0 md:grid-cols-2 lg:grid-cols-2 gap-5 py-5 md:py-10 lg:my-0 lg:px-10'>
          {/* total user */}
            <div className="card  bg-blue-500 text-neutral-content">
               <div className="card-body items-center text-center">
                 <h2 className="card-title font-bold">TOTAL USER</h2>
                 <p className='text-5xl font-bold'>{totalUser}</p>
               </div>
            </div>
            {/* total post */}
            <div className="card bg-orange-500 text-neutral-content">
               <div className="card-body items-center text-center">
               <h2 className="card-title font-bold">TOTAL POST</h2>
                 <p className='text-5xl font-bold'>{totalPost}</p>
               </div>
            </div>
            {/* tatal data */}
            <div className="card  bg-green-600 text-neutral-content">
               <div className="card-body items-center text-center ">
               <h2 className="card-title font-bold">TOTAL REQUEST</h2>
                 <p className='text-5xl font-bold'>{totalRequest}</p>
               </div>
            </div>
            {/* total post */}
            <div className="card bg-pink-500 text-neutral-content">
               <div className="card-body items-center text-center">
               <h2 className="card-title font-bold">TOTAL PET</h2>
                 <p className='text-5xl font-bold'>{totalPet}</p>
               </div>
            </div>
            
        </div>
    );
};

export default Admin_dashboard;