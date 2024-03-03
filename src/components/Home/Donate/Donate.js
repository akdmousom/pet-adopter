'use client'
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Link from 'next/link';
import React from 'react';
import { Parallax } from 'react-parallax';

const Donate = ({ heading }) => {
    return (
        <div className='bg-[#FFF5E4] dark:bg-[#1B2430] py-4 lg:py-8'>
            <h3 className="text-base font-semibold text-center text-[#F04336] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]">Transforming Futures Together</h3>
            <SectionTitle heading={' Help Us Change Lives'} />
            <div className="px-8 lg:px-16 py-5 text-white ">
                <Parallax blur={{ min: -50, max: 50 }}
                    bgImage="https://i.ibb.co/HYr8Rqh/donate.jpg"
                    bgImageAlt="the cat"
                    strength={200}>
                    <div className="hero h-[900px]">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md text-white">
                                <h1 className="mb-5 sm:text-3xl lg:text-5xl font-bold"> <span className='text-5xl py-0 text-[#f8685e] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]'>Every</span> Tail Wags with Your Support</h1>
                                <p className="mb-5 lg:text-lg space-y-6">Behind every happy rescue story are compassionate hearts like yours. Your kind donation fuels our mission to provide abandoned animals with second chances. It covers food, shelter, medical care, and the love they need until they find their forever homes.</p>
                                <Link href="donation/form">
                                    <button className="btn border-none rounded-md bg-[#F04336] hover:bg-black text-white dark:text-black dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] font-semibold">Donate</button></Link>
                            </div>
                        </div>
                        </div>
                </Parallax>
        </div>
        </div >
    );
};

export default Donate;