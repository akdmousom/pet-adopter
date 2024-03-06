"use client"
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import Loading from "@/app/(allpage)/pet-listing/loading";





const Petlisting = ({ searchParams }) => {
    // State Declear For Filter 
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const [locationFilter, setLocationFilter] = useState("");
    const [petlistings, setPetlistings] = useState([])
    //pagination state
    const [totalData, setTotalData] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    // All pets data fetch from database
    useEffect(() => {
        axios.get(`https://pet-adopter-backend.vercel.app/api/v1/petlistings?pageNumber=${pageNumber}`)
            // axios.get(`https://pet-adopter-backend.vercel.app/api/v1/petlistings?pageNumber=${pageNumber}`)
            .then(res => {
                setPetlistings(res.data);
            })

        AOS.init({
            duration: 700,
            once: true
        });
    }, [pageNumber])
    useEffect(() => {
        axios.get('https://pet-adopter-backend.vercel.app/api/v1/petlistcount')
            // axios.get('https://pet-adopter-backend.vercel.app/api/v1/petlistcount')
            .then(res => {
                setTotalData(res.data)
            })
    }, [])

    // pagination 
    const totalPage = Number(Math.ceil(totalData / 10))//10 ta item dekhabe
    const pages = [...Array(totalPage).keys()];
    // grab the filter location
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // grab the category
    const handleCategoryFilterChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // grab the location
    const handleLocationFilterChange = (e) => {
        setLocationFilter(e.target.value);
    };
    // Performe the filter

    const filteredPetListing = petlistings?.filter((card) => {
        // Filter by name
        const nameMatch = card.petName.toLowerCase().includes(searchTerm.toLowerCase());
        // Filter by category
        const categoryMatch = !selectedCategory || card.petCategory === selectedCategory.toLowerCase();
        const matchesLocation = !locationFilter || card.petLocation === locationFilter.toLowerCase();
        return nameMatch && categoryMatch && matchesLocation;
    });



    return (
        <div className="dark:bg-[#1B2430]">
            <div className="md:flex justify-center items-center py-4 lg:py-8">
                <input
                    value={searchTerm}
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="Search by name"
                    className="p-2 border rounded-md mr-2"
                />

                {/* <CustomDropdown /> */}
                <select
                    value={selectedCategory}
                    onChange={handleCategoryFilterChange}
                    className="p-2 border rounded-md mr-2"
                >
                    <option value="">All Categories</option>
                    <option className="hover:bg-[#FA524F] " value="Dog">dog</option>
                    <option value="Cat">cat</option>
                    <option value="Rabbit">rabbit</option>
                    <option value="Bird">bird</option>

                </select>
                <select
                    value={locationFilter}
                    onChange={handleLocationFilterChange}
                    className="p-2 border rounded-md"
                >
                    <option value="">Most Popular City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Narayanganj">Narayanganj</option>

                </select>
            </div>
            <div data-aos="fade-up">
                {/* if filter length is bigger then 0 then show first div otherwise show the not avilable message */}
                {filteredPetListing.length > 0 ?

                    <Suspense fallback={<Loading />}>
                        <div className="grid grid-cols-1 mx-4 md:mx-10 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 gap-6">
                            {
                                filteredPetListing?.map(pet =>
                                    <div key={pet._id} className="card bg-pink-100 dark:bg-pink-100 mx-auto">
                                        <Image src={pet?.petImage} alt="cat" width={400} height={340} className="rounded-t-lg hover:cursor-pointer hover:scale-105 object-cover transform delay-200 duration-700 h-[280px] w-[350px] mx-auto" />
                                        <div className="px-2 py-4">
                                            <h3 className="text-lg font-semibold mb-2">{pet.petName}</h3>

                                            <div>
                                                <p className="text-black font-medium mb-2">Age: {pet.petAge}</p>
                                                <p className="text-black font-medium mb-2">Location: {pet.petLocation}</p>
                                                <div className="flex mt-4 mb-2">
                                                    <Link href={`/${pet.petCategory}/${pet._id}`} >
                                                        <button
                                                            className="bg-[#F04336] dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] text-white dark:text-black font-semibold rounded-md px-4 py-2 hover:bg-black active:bg-[#f17876] focus:outline-none"
                                                        >
                                                            View Details
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </Suspense>

                    : <div className="max-w-full grid min-h-screen justify-center items-center mx-auto">
                        <h1 className="text-center font-bold text-3xl">Pet&apos;s Not Available</h1>
                    </div>}
            </div>
            <div className='text-center container mx-auto py-10 pagination'>
                {
                    pages.map(i => <button key={i} className={`p-3 py-1 btn btn-ghost m-1 rounded-lg active:scale-90 ${pageNumber === i && 'bg-orange-400 dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff]'}`} onClick={() => setPageNumber(i)}>{i + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Petlisting;