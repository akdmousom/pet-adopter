"use client"
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <div style={{ backgroundImage: 'url(https://i.ibb.co/YBLJ25g/DPage.jpg)' }} className='m-10 w-full h-full mx-auto  bg-cover bg-center opacity-30 ' data-aos="fade-up">
            <div className="py-10 text-white">
                {donationPages.map((page, index) => (
                    <h1 key={index} className={index === visibleIndex ? 'animate-fade-in text-center font-medium text-xl duration-700' : 'hidden'}>
                        {page}
                    </h1>
                ))}
            </div>

            <div className="p-5">
                <form >
                    <div className="w-full space-y-5 md:space-y-0 md:flex gap-10 justify-center">
                        <div className="w-72">
                            <div className="relative w-full min-w-[200px] h-10">
                                <input
                                    className="peer w-full h-full bg-transparent text-blue-gray-700  outline outline-0 focus:outline-0  transition-all placeholder-shown:border  text-white placeholder-shown:border-black focus:text-white placeholder-shown:border-t-black border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-black focus:border-[#F04336]"
                                    placeholder=" "
                                    type='text'
                                    name='name' />
                                <label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-[#F04336] before:border-black peer-focus:before:!border-[#F04336] after:border-black peer-focus:after:!border-[#F04336]">Enter Your Name
                                </label>
                            </div>
                        </div>
                        <div className="w-72">
                            <div className="relative w-full min-w-[200px] h-10">
                                <input
                                    className="peer w-full h-full bg-transparent text-blue-gray-700  outline outline-0 focus:outline-0  transition-all placeholder-shown:border  text-white placeholder-shown:border-black focus:text-white placeholder-shown:border-t-black border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-black focus:border-[#F04336]"
                                    placeholder=" "
                                    type='email'
                                    name='email' />
                                <label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-[#F04336] before:border-black peer-focus:before:!border-[#F04336] after:border-black peer-focus:after:!border-[#F04336]">Enter Your Email
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex gap-5 my-5 items-center justify-center">
                        <h1 className='text-2xl font-semibold '>
                            <button className="py-2 w-40 h-16 px-6 mb-4 mt-6 text-[#F04336] shadow-lg before:block before:-left-1 before:-top-1 before:bg-[#F04336] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#F04336] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">DONATE</button>
                        </h1>
                        <div className="text-center">
                            <div className="w-72">
                                <div className="relative w-full min-w-[200px] h-10">
                                    <input
                                        className="peer w-full h-full bg-transparent text-blue-gray-700  outline outline-0 text-white focus:outline-0  focus:text-white transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-black focus:border-[#F04336]"
                                        placeholder=" "
                                        type='number'

                                        name='amount' />
                                    <label
                                        className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75]  peer-focus:text-[#F04336] before:border-black peer-focus:before:!border-[#F04336] text-white after:border-black peer-focus:after:!border-[#F04336]">Enter Your Amount
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=" text-center py-10">
                        <button className=' text-center text-lg text-white hover:bg-black bg-[#F04336] px-4 py-2 rounded-lg '>  Next</button>
                    </div>



                </form>
            </div>

        </div>
    );
};

export default DonationPage;
