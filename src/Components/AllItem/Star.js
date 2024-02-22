'use client'
import React from 'react'
import ReactStars from "react-rating-stars-component";
const Star = ({ ratings }) => {
    return <ReactStars
        count={5}
        value={parseFloat(ratings)}
        size={24}
        activeColor="#ffd700"
    />
}

export default Star
