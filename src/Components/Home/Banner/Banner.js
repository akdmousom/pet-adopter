import { MdPets } from "react-icons/md";
import { FaPlay } from 'react-icons/fa';
import "../Banner/Banner.css"
import WhyChoseUs from "../WhyChooseUs/WhyChoseUs";
const Banner = () => {
    return (
        <div className="max-w-[1366px] mb-20">
            {/* Banner  */}
            <div className="hero relative h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/dLtZm6F/banner-Img.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="absolute flex transform -translate-y-1/5 md:left-5 md:right-5 ">

                    <div className=" md:w-1/2 text-white ml-10 lg:ml-[98px] md:ml-[75px] space-y-7">

                        <h1 className=" text-3xl md:text-5xl font-semibold">Best Friend With  <br /> Happy Time</h1>
                        <p className="text-xl">You can adopt here any kind of pets for your children <br /> or your any friends.</p>

                        <div>
                            <button className="flex md:text-lg py-6 items-center gap-1 btn-sm rounded-md bg-[#F04336] text-white">View More<MdPets></MdPets></button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Shared with Banner  */}

            <div className="bg-[#0A303A] absolute hidden md:block h-[116px] w-full lg:max-w-full laptopView xl:w-[1120px] md:w-[600px] xl:right-[123px] xl:left-[140px] md:left-[95px]  xl:top-[634px] lg:top-[640px] md:top-[656px]">
                <div className="flex gap-24 items-center justify-around mt-14">
                    {/* Pets Rescue  */}
                    <div className="text-white items-center">
                        <h3 className="text-sm md:flex items-center lg:gap-5 xl:text-2xl md:text-sm">Pets Rescue<FaPlay></FaPlay></h3>
                    </div>
                    {/* Pet Adoption */}
                    <div className="text-white">
                        <h3 className="text-sm md:flex items-center gap-5 xl:text-2xl md:text-sm">Pet Adoption <FaPlay></FaPlay></h3>
                    </div>

                    {/* Pets Shelter Support */}
                    <div className="text-white">
                        <h3 className="text-sm md:flex items-center gap-5 xl:text-2xl md:text-sm">Pets Shelter Support <FaPlay></FaPlay></h3>
                    </div>
                </div>

                {/* Update Marque  */}

                <div className="bg-[#FFE3E1] mt-[28px] h-14">
                    <button className="text-white btn-sm h-full px-5 bg-[#F04336]">Update</button>
                </div>


            </div>
        </div>
    );
};

export default Banner;