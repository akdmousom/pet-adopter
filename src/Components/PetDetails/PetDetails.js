'use client'

import axios from 'axios';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'


const PetDetails = ({ pet, user }) => {
    const router = useRouter()
    // console.log(user);

    const handleAdoptClick = () => {

        axios.post('https://pet-adopter-backend.vercel.app/api/v1/adoptrequest', { pet, user })
            .then(res => {
                console.log(res.data);

                toast.success('Pet adopted successfully!');
                router.push('/pet-listing')
            })
            .catch(error => {

                console.error('Error adopting pet:', error);
            });
    };
    return (
        <div>
            <div className=" md:flex items-center py-16 px-5 max-w-full md:max-w-5xl h-full w-full mx-auto  rounded-xl overflow-hidden  my-4 shadow-lg dark:bg-[#1B2430]">
                <div className="md:w-1/2">
                    <Image
                        width={500} height={400}
                        className="w-full h-full object-cover object-center"
                        src={pet.petImage}
                        alt={pet.petName}
                    />
                </div>

                <div className="md:w-1/2 p-6">
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{pet.petName}</h2>
                        <p className='dark:text-white'>Age: {pet.petAge}</p>
                    </div>

                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600 dark:text-white">Category: {pet.petCategory}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600 dark:text-white">Location: {pet.petLocation}</p>
                        </div>
                    </div>

                    <p className="text-gray-700 dark:text-white">{pet.description}</p>

                    <div className="mt-4 flex gap-10 items-center">
                        <button
                            onClick={handleAdoptClick}
                            className="hover:bg-black bg-[#F04336] dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] text-white dark:text-black font-bold py-2 px-4 rounded">
                            Adopt
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </div>
    );
};

export default PetDetails;