'use client'
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

const PetCommunity = () => {
    const [trueData,setStrueData]=useState(true)

     const story='Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.Hello Everyone This is my pet.'
     
    return (
        <div className="max-w-[1366px] mx-auto my-10 p-5">

        <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-3">

            {/* Blog Card 1 */}
            <div className="card  bg-base-100 shadow-xl">
                {/* Avatar  */}
                <div className="p-2">
                    <div className="flex">
                        <div className="avatar mx-3">
                            <div className="w-12 rounded-full">
                                <Image width={200} height={200} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                        </div>
                        {/* Name & Time  */}
                        <div>
                            <h3 className="text-base">Devil King</h3>
                            <p>3hr ago</p>
                        </div>
                    </div>
                    {/* Description  */}
                    <div className="lg:mx-4 my-3">
                      {
                        story.length <= 150?
                        <h1>{story}</h1>
                        :
                        trueData===true?
                        <h1>{story.slice(0,150)}....<span className="text-gray-400 cursor-pointer" onClick={()=>setStrueData(false)}>Read more</span></h1>
                        :
                        <h1>{story}</h1>
                      }
                    </div>
                </div>
                <figure><Image width={400} height={400} src="https://i.ibb.co/8nZpQhF/pet6.jpg" alt="Shoes" className="w-full" /></figure>
                <div className="p-5 space-y-5">

                    {/* Like & Comment  */}
                    <div className="flex justify-between ">
                        <p className="font-medium ">2k Like</p>
                        <p className="font-medium">10 comment</p>
                    </div>

                    <div className="card-actions  justify-between">
                        <button className="btn btn-sm badge-outline">Like</button>

                        <div className="dropdown dropdown-bottom dropdown-end">
                            <Modal/>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>


    </div>
    );
};

export default PetCommunity;