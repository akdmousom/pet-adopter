"use client"

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './UserReview.css'

import { EffectCoverflow, Autoplay, Pagination, } from 'swiper/modules';
import Image from 'next/image';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

const UserReview = () => {

    const [review, setReview] = useState([])
    console.log(review);
    
    useEffect(() => {
        axios.get('https://pet-adopter-backend.vercel.app/api/v1/Feedbacks')
            .then(res => setReview(res.data))
    }, [])


    return (
        <div className='mt-20 mb-12'>

            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>Users Review</h1>
                <h4 className='text-base font-semibold text-[#F04336]'>Users opinions</h4>
            </div>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="mySwiper"
            >

                {
                    review.map((item) =>
                        <SwiperSlide key={item?._id} className='bg-pink-100'>
                            <div className='text-center'>
                                <Image className='ml-[106px] h-24 w-24 object-cover' width={200} height={200} src={item?.image} alt="" />

                                <div>
                                    <h1 className='text-xl mt-2'>{item?.name}</h1>

                                   <StarRatings 
                                        starEmptyColor="orange"
                                        numberOfStars={item?.rating}
                                        starDimension="25px"
                                        starSpacing="5px"
                                        name='rating'
                                    />
                                    <p>{item?.review}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default UserReview;