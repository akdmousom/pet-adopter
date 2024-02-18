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
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-12 my-8'>
            {items.map(item =>
                <div key={item._id} className="card bg-base-100 hover:scale-110 duration-700 hover:shadow-xl">
                    <figure className="px-10 pt-10">
                        < Image src={item.image} height={200} width={200} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title h-24">{item.name}</h2>
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
                                    className="bg-[#FA524F] text-white font-bold rounded-md px-4 py-2 hover:bg-black active:bg-[#f17876] focus:outline-none"
                                >
                                    View Details
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>)}

        </div>
    );
};

export default Shop;