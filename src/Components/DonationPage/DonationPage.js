"use client"
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const DonationPage = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    const donationPages = ['Give love: support our pet donation, ensuring every furry friend gets the care they deserve.', 'Donate now for a brighter future, providing resources, comfort, and love to sheltered pets.', 'Be a hero, help us provide essentials for pets in need—supplies, medical care, and warmth.'];

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex(prevIndex => (prevIndex < donationPages.length - 1 ? prevIndex + 1 : 0));
        }, 3000);

        AOS.init({
            duration: 700,
            once: true,
        });
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);

    }, [donationPages.length]);

    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/YBLJ25g/DPage.jpg)' }} className='m-10 w-full h-full mx-auto  bg-cover bg-center opacity-30 py-24' data-aos="fade-up">
            <div className="py-10 text-white">
                {donationPages.map((page, index) => (
                    <h1 key={index} className={index === visibleIndex ? 'animate-fade-in text-center font-medium text-xl duration-700' : 'hidden'}>
                        {page}
                    </h1>
                ))}
            </div>
            <div className='flex justify-center item-center gap-4'>
                <Link title='donate $5' className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2' href={`paydonation?pay=5`}>
                    $5
                </Link>
                <Link  title='donate $10'className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2' href={`paydonation?pay=10`}>
                    $10
                </Link>
                <Link  title='donate $20'className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2' href={`paydonation?pay=20`}>
                    $20
                </Link>
                <Link  title='donate $50'className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2' href={`paydonation?pay=50`}>
                    $50
                </Link>
                <Link  title='donate $100'className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2' href={`paydonation?pay=100`}>
                    $100
                </Link>
            </div>
        </div>
    );
};

export default DonationPage;
