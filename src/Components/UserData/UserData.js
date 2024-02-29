'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'; // Corrected import statement
import Modal from './../PetCommunity/Modal';
import EmptyDashboard from '../EmptyDashboard/EmptyDashboard';
import Petlisting from '../Petlisting/Petlisting';

const UserData = ({ user }) => {
    const { email } = user;
    const [trueData, setStrueData] = useState(true);
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        axios.get('https://pet-adopter-rosy.vercel.app/api/v1/petCommunity')
            .then(res => {
                const filterdata=res.data.filter(items=>items.user_email===email)
                setPostData(filterdata)
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='mt-10'>
            <Petlisting/>
        </div>
    );
};

export default UserData;
