import Image from "next/image";
import Link from "next/link";
import CustomDropdown from "../CustomDropdown/CustomDropdown";


const Petlisting = () => {
    return (
        <div>
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="p-2 border rounded-md mr-2"
                />

                {/* <CustomDropdown /> */}
                <select
                    className="p-2 border rounded-md mr-2"
                >
                    <option value="">All Categories</option>
                    <option className="hover:bg-[#FA524F] " value="dog">dog</option>
                    <option value="cat">cat</option>
                    <option value="rabbit">rabbit</option>
                    <option value="bird">bird</option>

                </select>
                <select
                    className="p-2 border rounded-md"
                >
                    <option value="">Most Popular City</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="khulna">Khulna</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Narayanganj">Narayanganj</option>

                </select>
            </div>
            <div data-aos="fade-up" className="bg-white rounded-md shadow-md p-4">
                <Image src="https://i.ibb.co/drH1S0Y/Stache.jpg" alt="cat" width={400} height={340} className="rounded-lg w-[400px] h-[340px] object-cover mb-4" />
                <h2 className="text-2xl font-bold mb-2"></h2>
                <p className="text-gray-500 mb-2">Age: 21</p>
                <p className="text-gray-500 mb-2">Location: Dhaka</p>
                <Link href="/" >
                    <button
                        className="bg-[#FA524F] text-white font-bold rounded-md px-4 py-2 hover:bg-[#f17876] active:bg-[#f17876] focus:outline-none"
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Petlisting;