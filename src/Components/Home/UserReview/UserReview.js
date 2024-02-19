"use client"

import React, { useState } from 'react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './UserReview.css'



import axios from 'axios';
import ReviewCard from './ReviewCard';


const UserReview = () => {

    const [review, setReview] = useState([])
console.log(review);
    axios.get('https://pet-adopter-backend.vercel.app/api/v1/Feedbacks')
        .then(res => {
            setReview(res.data)

        })



    return (
        <div>
            {
                review.map((item)=> <ReviewCard key={item._id} item={item}></ReviewCard>)
            }
        </div>
    );
};

export default UserReview;