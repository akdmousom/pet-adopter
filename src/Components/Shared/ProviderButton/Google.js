'use client'
import Image from 'next/image';
import React from 'react';
import googleIcon from '../../../../public/images/google.svg'

const Google = () => {

    const handleClick = async () => {
        console.log('click');
        try {
            await signIn('google', {callbackUrl:'/'})
        } catch (error) {
            console.log(error);
        }
    }
   
    return (
<<<<<<< HEAD
        <button
       type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={googleIcon} alt='google icon' width={30} /> Login With Google</button>
=======
        <button onClick={async()=>{
            await signIn('google', {callbackUrl: '/'})
        }} type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={googleIcon} alt='google icon' width={30} /> Login With Google</button>
>>>>>>> 1353ab0136cc79fac9c10b5680b9a4dcd409a4b8
    );
};

export default Google;
