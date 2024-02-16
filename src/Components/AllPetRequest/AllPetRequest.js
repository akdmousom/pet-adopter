'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const AllPetRequest = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch('https://pet-adopter-backend.vercel.app/api/v1/adoptData')
      .then(res => res.json())
      .then(data => setdata(data))
  }, [])
  // console.log(data)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 lg:mx-5'>

      {
        data.map(datas => <div key={datas._id} className="card bg-base-100 border border-[#f04336] m-2">
          <div className="p-5 flex space-x-5">
            <div className="avatar">
              <div className="w-8 lg:w-12 rounded-full ring ring-[#F04336] ring-offset-base-100 ring-offset-2">
                <Image width={200} height={200} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
              </div>
            </div>
            <div>
              <h1 className='font-bold text-xl'>{datas.name}</h1>
              <h1>5 hrs ago</h1>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Need Cat</h2>
            <p>{datas.message} </p>
            <div className="card-actions justify-end ">
              <div className="space-x-5 pt-5 flex">
                <button className="btn bg-[#fb943a] hover:bg-black text-white lg:font-bold text-sm">Read More</button>
                <button className="btn bg-[#F04336] hover:bg-black text-white font-bold">Donate pet</button>
              </div>

            </div>
          </div>
        </div>)
      }

    </div>
  );
};

export default AllPetRequest;