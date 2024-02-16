'use client'
import Image from 'next/image';
import ReactStars from "react-rating-stars-component";

const ItemDetails = ({ item }) => {
    return (
        <div>
            <div className=" md:flex items-center  px-5 max-w-full md:max-w-5xl h-full w-full mx-auto  rounded-xl overflow-hidden  my-4 shadow-lg">
                <div className="md:w-1/2">
                    <Image
                        width={500} height={400}
                        className="w-full h-[500px] object-cover object-center"
                        src={item.image}
                        alt={item.name}
                    />
                </div>

                <div className="md:w-1/2 p-6">
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
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
                            <p className="text-sm text-gray-600">Category: {item.category}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600">Price: ${item.price}</p>
                        </div>
                    </div>

                    <p className="text-gray-700">{item.description}</p>

                    <div className="mt-4 flex gap-10 items-center">
                        <p className="text-sm text-gray-600">Cash on Delivery Available</p>
                        <p className="text-sm text-gray-600">Order within 48 hours to avail</p>
                        <button
                            className="hover:bg-black bg-[#F04336] text-white font-bold py-2 px-4 rounded">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;