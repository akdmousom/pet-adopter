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
        <div>
            <div className="py-4 md:flex justify-center items-center">
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
            <div data-aos="fade-up" className="  ">
                {/* if filter length is bigger then 0 then show first div otherwise show the not avilable message */}
                {filteredPetListing.length > 0 ?

                <Suspense fallback={<Loading/>}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mx-auto">
                   {
                     filteredPetListing?.map(pet =>
                        <div key={pet._id} className="card border border-[#f04336] py-4 px-5 mx-4 lg:mx-auto mb-8">
                            <Image src={pet?.petImage} alt="cat" width={400} height={340} className="rounded-lg w-[400px] h-[340px] object-cover mb-4 hover:scale-110 duration-700" />
                            <h2 className="text-2xl font-bold mb-2">{pet.petName}</h2>
                            <p className="text-gray-500 mb-2">Age: {pet.petAge}</p>
                            <p className="text-gray-500 mb-2">Location: {pet.petLocation}</p>
                            <Link href={`/${pet.petCategory}/${pet._id}`} >
                                <button
                                    className="bg-[#FA524F] text-white font-bold rounded-md px-4 py-2 hover:bg-black active:bg-[#f17876] focus:outline-none"
                                >
                                    View Details
                                </button>
                            </Link>
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
                    pages.map(i => <button key={i} className={`p-3 py-1 btn btn-ghost m-1 rounded-lg active:scale-90 ${pageNumber === i && 'bg-orange-400'}`} onClick={() => setPageNumber(i)}>{i + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Petlisting;