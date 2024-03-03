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
        <div className='bg-[#FFF5E4]'>
            <div className='bg-[#FFF5E4] dark:bg-[#1B2430] py-12'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 my-8'>
                    {items.map(item =>
                        <div key={item._id} className="card border border-[#f04336] dark:border-[#68e0cf] hover:scale-105 duration-1000 hover:shadow-xl">
                            <figure className="px-10 pt-10">
                                < Image src={item.image} height={200} width={200} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title h-24 dark:text-white">{item.name}</h2>
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
                                            className="bg-[#FA524F] dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] text-white dark:text-black font-semibold rounded-md px-4 py-2 hover:bg-black active:bg-[#f17876] focus:outline-none"
                                        >
                                            View Details
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default Shop;