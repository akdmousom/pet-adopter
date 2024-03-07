'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";

const Shop = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('https://pet-adopter-backend.vercel.app/api/v1/shopitems')
            .then(res => setItems(res.data))
    }, [])
    return (
        <div className=''>
            <div className='dark:bg-[#1B2430] py-12'>
                <div className="grid grid-cols-1 mx-4 md:mx-10 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 gap-6">
                    {
                        items.map(item =>
                            <div key={item._id} className="card bg-pink-100 dark:bg-pink-100 mx-auto">
                                <Image src={item.image} alt="cat" width={400} height={340} className="rounded-t-lg hover:cursor-pointer hover:scale-105 object-cover transform delay-200 duration-700 h-[400px] w-full mx-auto" />
                                <div className="px-2 py-4">
                                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            value={parseFloat(item.rating)}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div className="card-actions">
                                        <Link href={`item/${item.category}/${item._id}`} >
                                            <button
                                                className="bg-[#F04336] dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] text-white dark:text-black font-semibold rounded-md px-4 py-2 hover:bg-black active:bg-[#f17876] focus:outline-none"
                                            >
                                                View Details
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div >
        </div >
    );
};

export default Shop;