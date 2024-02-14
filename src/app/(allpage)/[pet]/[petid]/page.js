
'use client'
import { auth } from '@/app/api/auth';
import { getSinglePet } from '@/utils/getSinglePet';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const petDetailPage = async ({ params }) => {
    const pet = await getSinglePet(params.petid)
    // console.log(pet);
    const session = await auth();
    // console.log(session?.user.name);

    const handleAdoptClick = () => {
        const userData = {
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image, // Adjust this based on the actual structure of your user object
        };
        axios.post('http://localhost:5000/api/v1/adoptrequest', { pet, user: userData })
            .then(res => {
                console.log(res.data);

                console.log('Pet adopted successfully!');
            })
            .catch(error => {

                console.error('Error adopting pet:', error);
            });
    };
    return (
        <div>

            <div className=" md:flex items-center  px-5 max-w-full md:max-w-5xl h-full w-full mx-auto  rounded-xl overflow-hidden  my-4 shadow-lg">
                <div className="md:w-1/2">
                    <Image
                        width={500} height={400}
                        className="w-full h-[400px] object-cover object-center"
                        src={pet.petImage}
                        alt={pet.petName}
                    />
                </div>

                <div className="md:w-1/2 p-6">
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold text-gray-800">{pet.petName}</h2>
                        <p>Age: {pet.petAge}</p>
                    </div>

                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600">Category: {pet.petCategory}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600">Location: {pet.petLocation}</p>
                        </div>
                    </div>

                    <p className="text-gray-700">{pet.description}</p>

                    <div className="mt-4 flex gap-10 items-center">
                        <button
                            onClick={handleAdoptClick}
                            className="hover:bg-[#f28583] bg-[#FA524F] text-white font-bold py-2 px-4 rounded">
                            Adopt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default petDetailPage;