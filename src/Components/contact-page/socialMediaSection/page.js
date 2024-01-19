import React from 'react';
import facebook from '../../../../public/images/facebook.png'
import github from '../../../../public/images/github.png'
import instagram from '../../../../public/images/instagram.png'
import discord from '../../../../public/images/discord.png'
import twitter from '../../../../public/images/twitter.png'
import whatsApp from '../../../../public/images/whatsApp.png'
import Image from 'next/image';
const SocialMediaSection = () => {
    return (
        <div className="mx-24 mb-10">
            <div className="bg-[#FFE3E1] py-3 text-center text-xl font-bold  my-10">Contact us with Social media</div>
            <div className='bg-[#FFE3E1] grid grid-cols-3'>
                <div className="flex flex-col py-10 mx-auto">
                    <div className="w-24 rounded-xl">
                        <Image src={facebook} className='w-24' alt='' />
                    </div>
                    <div className='bg-white w-24 my-3'>
                        <p className='text-center'>Facebook</p>
                    </div>
                </div>
                {/* github section            */}

                <div className="flex flex-col py-10 mx-auto">
                    <div className="w-24 rounded-xl ">
                        <Image src={github} className='w-24' alt='' />
                    </div>
                    <div className='bg-white w-24 my-3'>
                        <p className='text-center'>Github</p>
                    </div>
                </div>

                {/* instragra section */}
                <div className="flex flex-col py-10 mx-auto">
                    <div className="w-24 rounded-xl">
                        <Image src={instagram} className='w-24' alt='' />
                    </div>
                    <div className='bg-white w-24 my-3'>
                        <p className='text-center'>instragram</p>
                    </div>
                </div>
                {/* Discord section*/}

                <div className="flex flex-col py-10 mx-auto">
                    <div className="w-24 rounded-xl">
                        <Image src={discord} className='w-24' alt='' />
                    </div>
                    <div className='bg-white w-24 my-3'>
                        <p className='text-center'>Discord</p>
                    </div>
                </div>
                {/* twitter section */}

                <div className="flex flex-col py-10 mx-auto">
                    <div className="w-24 rounded-xl">
                        <Image src={twitter} className='w-24' alt='' />
                    </div>
                    <div className='bg-white w-24 my-3 mx-auto'>
                        <p className='text-center'>Twitter</p>
                    </div>
                </div>
                {/* Whats app */}

                <div className="flex flex-col py-10 mx-auto">
                    <div className="w-24 rounded-xl border">
                        <Image src={whatsApp} className='w-24' alt='' />
                    </div>
                    <div className='bg-white w-24 my-3'>
                        <p className='text-center'>Whats App</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaSection;