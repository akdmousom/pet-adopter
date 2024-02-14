'use client'

import React from 'react';

const Error = ({ error, reset }) => {
    return (
        <div className='text-center min-h-screen grid justify-center items-center'>
            <div>
                <h2 className='font-bold text-3xl'>Something went wrong!</h2>
                <div className='pt-4'>    
                     <button className='bg-[#f04336] hover:bg-black py-2 px-2 rounded-lg text-white'
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </button></div>
            </div>
        </div>
    )
};

export default Error;