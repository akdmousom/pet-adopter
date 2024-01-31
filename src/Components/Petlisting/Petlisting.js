"use client"
import Image from "next/image";
import Link from "next/link";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Petlistings = [
    {
        "id": 1,
        "petName": "Buddy",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Dog",
        "petAge": 2,
        "petDescription": "Meet Buddy, a joyful and affectionate two-year-old Golden Retriever. His golden fur and wagging tail make him the perfect companion for an active family. Buddy loves long walks, playing fetch, and snuggling up on the couch. His friendly nature makes him great with children and other pets. Adopt Buddy, and you'll have a loyal friend for life!",
        "petLocation": "Dhaka"
    },
    {
        "id": 2,
        "petName": "Whiskers",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Cat",
        "petAge": 3,
        "petDescription": "Introducing Whiskers, a sophisticated three-year-old Siamese cat with striking blue eyes and a luxurious coat. Whiskers is an independent feline who enjoys lounging in sunny spots and being pampered with gentle strokes. This charming cat would be an ideal companion for someone seeking a graceful and low-maintenance pet.",
        "petLocation": "Chittagong"
    },
    {
        "id": 3,
        "petName": "Flopsy",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Rabbit",
        "petAge": 1,
        "petDescription": "Say hello to Flopsy, an adorable one-year-old Holland Lop rabbit. With soft, floppy ears and a sweet demeanor, Flopsy is a bundle of cuteness. This friendly bunny loves hopping around and nibbling on fresh greens. Flopsy is perfect for families looking to add a gentle and affectionate rabbit to their home.",
        "petLocation": "Khulna"
    },
    {
        "id": 4,
        "petName": "Tweety",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Bird",
        "petAge": 1,
        "petDescription": "Meet Tweety, a vibrant one-year-old canary with a colorful plumage and a delightful song. Tweety's cheerful tunes will brighten up any room, making him an ideal pet for bird enthusiasts. This small and sociable bird enjoys flying around his cage and interacting with his human companions. Bring Tweety into your home, and enjoy the melodious charm he brings.",
        "petLocation": "Rajshahi"
    },
    {
        "id": 5,
        "petName": "Shadow",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Dog",
        "petAge": 4,
        "petDescription": "Shadow is a loyal and energetic four-year-old Border Collie mix. With a sleek black coat and intelligent eyes, Shadow is ready for adventures and outdoor activities. This smart canine companion excels in obedience training and loves playing fetch. If you're an active individual or family seeking a devoted canine friend, Shadow is the perfect match.",
        "petLocation": "Sylhet"
    },
    {
        "id": 6,
        "petName": "Mittens",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Cat",
        "petAge": 2,
        "petDescription": "Mittens is a playful and affectionate two-year-old Tabby cat. With soft fur and charming markings, Mittens is not only a joy to look at but also a delightful addition to any home. This curious cat loves exploring cozy corners and engaging in interactive play. Bring Mittens into your life for endless purrs and moments of feline fun.",
        "petLocation": "Barisal"
    },
    {
        "id": 7,
        "petName": "Cotton",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Rabbit",
        "petAge": 1,
        "petDescription": "Cotton, the one-year-old English Angora rabbit, is a fluffy ball of joy. With long, silky fur and a gentle disposition, Cotton is a charming companion for those who appreciate the softness of bunny cuddles. This adorable rabbit enjoys hopping around and being pampered with gentle grooming. Adopt Cotton for a daily dose of bunny love.",
        "petLocation": "Narayanganj"
    },
    {
        "id": 8,
        "petName": "Sunny",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Bird",
        "petAge": 2,
        "petDescription": "Sunny, the two-year-old Sun Conure, is a feathered bundle of sunshine. With vibrant yellow and orange plumage, Sunny is a tropical beauty. This social bird loves perching on shoulders and interacting with his human flock. Bring the warmth of Sunny's personality into your home and experience the joy of having a colorful and lively avian companion.",
        "petLocation": "Khulna"
    },
    {
        "id": 9,
        "petName": "Rocky",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Dog",
        "petAge": 3,
        "petDescription": "Rocky, the three-year-old Boxer, is a muscular and playful canine ready to join an active household. With a brindle coat and a heart full of enthusiasm, Rocky loves outdoor adventures and is excellent with kids. If you're looking for a loyal and spirited dog to be your exercise buddy, consider welcoming Rocky into your family.",
        "petLocation": "Dhaka"
    },
    {
        "id": 10,
        "petName": "Cleo",
        "petImage": "https://i.ibb.co/drH1S0Y/Stache.jpg",
        "petCategory": "Cat",
        "petAge": 4,
        "petDescription": "Cleo, the four-year-old Persian cat, is a regal beauty with a luxurious coat and captivating green eyes. Known for her calm and dignified demeanor, Cleo enjoys lounging in style and receiving gentle affection. If you appreciate the elegance of Persian cats and desire a sophisticated feline companion, Cleo is ready to grace your home with her presence.",
        "petLocation": "Dhaka"
    }
];



const Petlisting = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const [locationFilter, setLocationFilter] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true
        });
    }, [])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryFilterChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleLocationFilterChange = (e) => {
        setLocationFilter(e.target.value);
    };
    const filteredPetListing = Petlistings?.filter((card) => {
        // Filter by name
        const nameMatch = card.petName.toLowerCase().includes(searchTerm.toLowerCase());
        // Filter by category
        const categoryMatch = !selectedCategory || card.petCategory === selectedCategory;
        const matchesLocation = !locationFilter || card.petLocation === locationFilter;
        return nameMatch && categoryMatch && matchesLocation;
    });



    return (
        <div>
            <div className="mb-4 md:flex items-center">
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
            <div data-aos="fade-up" className=" grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-3 mb-10">
                {filteredPetListing?.map(pet =>
                    <div key={pet.id} className="bg-white rounded-md shadow-md p-4">
                        <Image src={pet.petImage} alt="cat" width={400} height={340} className="rounded-lg w-[400px] h-[340px] object-cover mb-4 hover:scale-110 duration-700" />
                        <h2 className="text-2xl font-bold mb-2">{pet.petName}</h2>
                        <p className="text-gray-500 mb-2">Age: {pet.petAge}</p>
                        <p className="text-gray-500 mb-2">Location: {pet.petLocation}</p>
                        <Link href="/" >
                            <button
                                className="bg-[#FA524F] text-white font-bold rounded-md px-4 py-2 hover:bg-[#f17876] active:bg-[#f17876] focus:outline-none"
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Petlisting;