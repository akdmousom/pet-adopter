import { MdPets } from "react-icons/md";
import Link from "next/link";


const Banner = () => {
    return (
        <div className="max-w-full mx-auto">
            {/* Banner  */}
            <div className="hero relative h-[750px]" style={{ backgroundImage: 'url(https://i.ibb.co/dLtZm6F/banner-Img.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="absolute flex transform -translate-y-1/5 md:left-5 md:right-5 ">
                    <div className=" md:w-1/2 text-white ml-10 lg:ml-[103px] md:ml-[75px] space-y-7">
                        <h1 className=" text-2xl lg:text-5xl md:text-3xl font-semibold">Best Friend With  <br /> Happy Time</h1>
                        <p className="text-xl">You can adopt here any kind of pets for your children <br /> or your any friends.</p>
                        <div>
                        <Link href={'/pet-listing'}><button className="flex md:text-lg py-6 items-center gap-1 btn-sm rounded-md bg-[#F04336] dark:bg-gradient-to-r from-[#5edae8] to-[#12fbff] dark:hover:bg-white hover:bg-black text-white dark:text-black font-semibold">View More<MdPets></MdPets></button></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shared with Banner  */}

            <div className=" hidden mx-auto lg:block md:block xl:w-[1120px] lg:w-[782px] md:w-[578px]  absolute bg-[#0A303A] dark:bg-[#AD8155] h-[116px] md:left-[46px] xl:left-[123px] lg:left-[123px] xl:right-[123px] lg:right-[123px] top-[604px] left-[39px] right-[44px] mt-[200px]">

                {/* Banner Card  */}
                <div className="flex justify-evenly mt-[43px]">

                    {/* button 1  */}
                    <div className="text-white px-3">
                        <h3 className="lg:text-2xl md:text-lg items-center justify-center gap-5 flex">Pets Rescue <MdPets /> </h3>
                    </div>
                    {/* button 2  */}
                    <div className="text-white px-3">
                        <h3 className="lg:text-2xl md:text-lg items-center gap-5 flex">Pet Grooming <MdPets /> </h3>
                    </div>
                    {/* button 3  */}
                    <div className="text-white px-3">
                        <h3 className="lg:text-2xl md:text-lg items-center gap-5 flex">Pet Sitter <MdPets /> </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;