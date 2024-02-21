'use client'
import Image from "next/image";
// import Modal from "./Modal";
import { useEffect, useState } from "react";
import axios from 'axios';
import Modal from "./Modal";

const PetCommunity = ({user}) => {
    const [trueData, setTrueData] = useState(true)
    const [postData, setPostData] = useState([])
    const [like, setLike] = useState(true)
    

    useEffect(() => {
        axios.get('https://pet-adopter-backend.vercel.app/api/v1/petCommunity')
              .then(res => {
                       setPostData(res.data.reverse())
            })
            .catch(error => console.log (error, 'error'))
   }, [])
    const handleLike=(id)=>{
      const like='like'
    const likeComment={id,like}
    axios.post('https://pet-adopter-backend.vercel.app/api/v1/likeComment',likeComment)
    .then(res=>{
      console.log(res)
      setLike(false)
    })
    .catch(error=>console.log(error))
      
        
      }
    return (
        <div>
            {
              postData==''?
              <h1 className="font-bold text-5xl text-center my-40">There are no post available !</h1>
              :
              <div>
                {
                postData.map(data=><div key={data._id} className="card  bg-base-100 shadow-xl my-10 mx-10">
                <div className="flex py-2 lg:py-5 pl-2 lg:pl-5">
                <div className="avatar py-2">
                <div className="w-8 lg:w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={data.user_image} />
                </div>
              </div>
                  <div className=' pl-5'>
                  <h2 className="card-title text-lg">{data.user_name}</h2>
                  <p className='text-xs'>{data.post_date}</p>
                  </div>
                </div>
                {
                data.input_message.length>=100?
                trueData==true?
                <h1 className='text-lg p-1 lg:pb-5 lg:pl-5'>{data.input_message.slice(0,150)}.....<span onClick={()=>setTrueData(false)} className='cursor-pointer'>more</span></h1>
                :
                <h1 className='text-lg p-1 lg:pb-5 lg:pl-5'>{data.input_message}</h1>
                :
                <h1 className='text-sm p-1 lg:pb-5 lg:pl-5'>{data.input_message}</h1>
              }
                <div className=' flex flex-col items-center'>
                   <figure className=""><img className="w-screen" src={data.input_image} alt="Shoes" /></figure>
                </div>
                <div className='flex justify-between mx-2 lg:mx-16 my-2 lg:my-5'>
                  <div className='space-y-2 lg:space-y-5'>
                     <h1 className='lg:font-bold text-center text-xs'>10K</h1>
                     {
                      like==true?
                      <h1 className='font-bold border border-black py-2 px-3 rounded-lg text-xs' onClick={()=>handleLike(data._id)}>Like</h1>
                      :
                      <h1 className='font-bold border border-black py-2 px-3 rounded-lg text-xs text-white bg-black'>Like</h1>
                     }
                  </div>
                  <div className='space-y-2 lg:space-y-5'>
                     <h1 className='lg:font-bold text-center text-xs'>500</h1>
                     <Modal data={data} user={user}/>
                  </div>
                </div>
              </div>)
            }
              </div>
            }
        </div>
    );
};

export default PetCommunity;