import Image from 'next/image';
import React from 'react';

const GetInTouch = () => {
    return (
        <div className="mx-5 lg:mx-24">
            <h3 className="dark:bg-[#AD8155] text-3xl lg:text-4xl text-center dark:text-white font-bold py-6 px-4 my-10">Get In Touch</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-12'>
                <div className='flex flex-col text-center items-center space-y-6 py-8'>
                    <div>
                        <Image src="https://i.ibb.co/mth9hjQ/icons8-location-96.png" alt="location" className='py-4 mx-auto hover:scale-105 object-cover' width={50} height={50} />
                        <h1 className='text-2xl font-bold dark:text-white'>ADDRESS</h1>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold dark:text-white'>Pet Adopter Contracting</h3>
                        <p className='dark:text-white font-medium space-y-2'>6950 S. Jordan Road <br />Centennial, CO 80112</p>
                    </div>
                    
                </div>
                <div className='flex flex-col text-center items-center space-y-6 py-8'>
                    <div>
                        <Image src="https://i.ibb.co/kB3crBM/icons8-phone-100.png" alt="phone"  className='py-4 mx-auto hover:scale-105 object-cover' width={50} height={50} />
                        <h1 className='text-2xl font-bold  dark:text-white'>PHONE</h1>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold dark:text-white'>Pet Adopter Contracting</h3>
                        <p className='dark:text-white font-medium space-y-2'>+880 343 533 23 23</p>
                    </div>
                    
                </div>
                <div className='flex flex-col text-center items-center space-y-6 py-8'>
                    <div>
                        <Image src="https://i.ibb.co/CvpGFzq/icons8-email-100.png" alt="email"  className='py-4 mx-auto hover:scale-105 object-cover' width={50} height={50} />
                        <h1 className='text-2xl font-bold dark:text-white'>EMAIL</h1>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold dark:text-white'>Request for Adoption</h3>
                        <p className='dark:text-white font-medium space-y-2'>info@petadopter.com</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;