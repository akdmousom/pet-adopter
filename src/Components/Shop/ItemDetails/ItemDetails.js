'use client'
import Image from 'next/image';
import Link from 'next/link';
import ReactStars from "react-rating-stars-component";

const ItemDetails = ({ item }) => {
    return (
        <div>
            <div className=" md:flex items-center  px-5 max-w-full md:max-w-5xl h-full w-full mx-auto  rounded-xl overflow-hidden  my-4 shadow-lg py-20 dark:bg-[#1B2430]">
                <div className="md:w-1/2">
                    <Image
                        width={500} height={400}
                        className="w-full h-[600px] object-cover object-center"
                        src={item.image}
                        alt={item.name}
                    />
                </div>

                <div className="md:w-1/2 p-6">
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{item.name}</h2>
                        <div>
                            <ReactStars
                                count={5}
                                value={parseFloat(item.rating)}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600 dark:text-white">Category: {item.category}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600 dark:text-white">Price: ${item.price}</p>
                        </div>
                    </div>

                    <p className="text-gray-700 dark:text-white">{item.description}</p>

                    <div className="mt-4 flex gap-10 items-center">
                        <p className="text-sm text-gray-600 dark:text-white">Cash on Delivery Available</p>
                        <p className="text-sm text-gray-600 dark:text-white">Order within 48 hours to avail</p>
                        <Link href={`/payment?id=${item?._id}`}>
                            <button
                                className="hover:bg-black bg-[#F04336] dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] text-white dark:text-black font-bold py-2 px-4 rounded">
                                Buy
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;