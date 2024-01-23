import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';

const Donate = ({ heading }) => {
    return (
        <div className='bg-[#FFF5E4]'>
            <SectionTitle heading={' Help Us Change Lives'} />
            <div className="px-16 py-5 text-white ">
                <div className="hero bg-fixed min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HYr8Rqh/donate.jpg)' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-white">
                            <h1 className="mb-5 text-3xl font-bold"> <span className='text-5xl py-0 text-[#f8685e]'>Every</span> Tail Wags with Your Support</h1>
                            <p className="mb-5">Behind every happy rescue story are compassionate hearts like yours. Your kind donation fuels our mission to provide abandoned animals with second chances. It covers food, shelter, medical care, and the love they need until they find their forever homes.</p>
                            <button className=" md:text-lg px-4 py-2 text-center rounded-md bg-[#F04336] text-white">DONATE</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Donate;