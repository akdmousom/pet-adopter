"use client"
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const DonationPage = () => {
    const router = useRouter()
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
    const CustomDonate = e => {
        e.preventDefault()
        const pay = e.target.pay.value;
        router.push(`paydonation?pay=${pay}`)
    }
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/YBLJ25g/DPage.jpg)' }} className=' w-full h-full mx-auto bg-blend-overlay bg-black bg-opacity-50 bg-cover bg-center opacity-30 py-24' data-aos="fade-up">
            <h2 className='text-3xl font-bold text-white uppercase text-center'>donate for our community</h2>
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
                <Link title='donate $10' className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2' href={`paydonation?pay=10`}>
                    $10
                </Link>
                <Link title='donate $20' className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2' href={`paydonation?pay=20`}>
                    $20
                </Link>
                <Link title='donate $50' className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2' href={`paydonation?pay=50`}>
                    $50
                </Link>
                <Link title='donate $100' className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2' href={`paydonation?pay=100`}>
                    $100
                </Link>
            </div>
            <h3 className='text-center text-white font-semibold text-xl pt-5'>or<br /> insert your ammount here</h3>
            <form onSubmit={CustomDonate} className='flex justify-center items-center max-w-xl box-border p-6 gap-5 text-white mx-auto flex-col'>
                <input className='w-full p-4 text-black font-bold' type='type="number" ' name='pay' placeholder='your amount ' />
                <button type='submit' className='bg-red-600 text-white rounded-md hover:scale-110 font-bold transition-all px-10 py-2'>donate</button>
            </form>
        </div>
    );
};

export default DonationPage;
