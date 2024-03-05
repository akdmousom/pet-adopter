'use client'
import { useEffect, useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const AllAdoptRequest = () => {
  const [adoptData,setAdoptData]=useState([])
  useEffect(()=>{
    axios.get('https://pet-adopter-backend.vercel.app/api/v1/adoptDataGet')
    .then(res=>setAdoptData(res.data.reverse()))
    .catch(error=>console.log(error))
  },[])

  const accept=()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Accept Request !",
      showConfirmButton: false,
      timer: 1500
    });
    
  }
  const Cancel=()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cancel Request !",
      showConfirmButton: false,
      timer: 1500
    });
    
  }
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 m-5'>
            {
              adoptData.map(data=><div key={data._id} className="card bg-white text-black shadow-xl ">
              <div className="card-body">
                <h2 className="font-bold text-ms">Name: {data.name}</h2>
                <h2 className="font-bold">Email: {data.email}</h2>
                <h2 className="font-bold">Phone Nubmer: {data.number}</h2>
                <p>{data.message}</p>
                <div className="card-actions justify-end">
                  <button onClick={accept} className="btn btn-red-500">Accept</button>
                  <button onClick={Cancel} className="btn btn-ghost">Cancel</button>
                </div>
              </div>
            </div>)
            }
        </div>
    );
};

export default AllAdoptRequest;