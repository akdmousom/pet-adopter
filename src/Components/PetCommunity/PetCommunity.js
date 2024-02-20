'use client'
import Image from "next/image";
// import Modal from "./Modal";
import { useEffect, useState } from "react";
import axios from 'axios';
import Modal from "./Modal";

const PetCommunity = () => {
    const [trueData, setStrueData] = useState(true)
    const [postData, setPostData] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/petCommunity/api/v1/petCommunity')
              .then(res => {
                       setPostData(res.data.reverse())
            })
            .catch(error => console.log(error, 'error'))
   }, [])
     console.log(postData)
    return (
        <div>
            {
                postData.map(data=><div key={data._id} className="  bg-base-100 border border-red-600">
                <div className="flex py-2 lg:py-5 pl-2 lg:pl-5">
                <div className="avatar py-2">
                <div className="w-8 lg:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
                  <div className=' pl-5'>
                  <h2 className="card-title text-sm">Name</h2>
                  <p className='text-xs'>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
                  <h1 className='text-xs p-1 lg:pl-5'>messeage</h1>
                <div className=' flex flex-col items-center'>
                   <figure className=""><img className="w-full" src={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="Shoes" /></figure>
                </div>
                <div className='flex justify-between mx-2 lg:mx-6 my-2 lg:my-5'>
                  <div className='space-y-2 lg:space-y-5'>
                     <h1 className='lg:font-bold text-center text-xs'>10K</h1>
                     <h1 className='font-bold border border-black py-2 px-3 rounded-lg text-xs'>Like</h1>
                  </div>
                  <div className='space-y-2 lg:space-y-5'>
                     <h1 className='lg:font-bold text-center text-xs'>500</h1>
                     <h1 className='font-bold border border-black py-2 px-3 rounded-lg text-xs'>comment</h1>
              
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default PetCommunity;