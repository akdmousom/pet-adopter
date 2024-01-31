'use client'
import Image from 'next/image';
import React from 'react';
import facebookIcon from '../../../../public/images/facebook.svg'
import { signIn } from 'next-auth/react';

const Facebook = () => {
    return (
        <button onClick={()=>{
            signIn('facebook')
        }} type="submit" className="btn hover:bg-black hover:text-white gap-5"><Image src={facebookIcon} alt='facebook icon' width={30} /> Login With Facebook</button>
    );
};

export default Facebook;