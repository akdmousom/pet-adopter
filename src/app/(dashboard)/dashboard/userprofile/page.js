import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const page = () => {

    return (
        <div className="my-5 max-w-[1200px] mx-auto">

        <div className="bg-base-100 rounded-lg shadow-xl p-5 md:p-8">

            <div className="lg:flex items-center gap-5 w-2/3 mx-auto">
                {/* User Profile  */}
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <Image width={200} height={200} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                    </div>
                </div>
                {/* User Name  */}
                <div className="space-y-3">
                    <h1 className="md:text-xl font-semibold">King Kong</h1>
                    <p className="font-medium  text-base">Hello Everyone, I am King Kong. I am a Frontend Developer.</p>
                    <div className="md:flex gap-5">
                        <div className="flex items-center gap-2">
                            <FaLocationDot />
                            <p className="font-medium">Bangladesh</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <p className="font-medium">+880 1755465425</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail />
                            <p className="font-medium">pet207@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Basic Info  */}
            <div className="w-2/3 mx-auto my-8">
                <h1 className="md:text-2xl font-medium my-5">Basic Info</h1>
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                    <h2 className="md:text-xl">Name</h2>
                    <h1 className="md:text-base font-medium">Kin Kong</h1>

                    <h2 className="md:text-xl">Birthday</h2>
                    <h1 className="md:text-base font-medium">May 14, 2005</h1>

                    <h2 className="md:text-xl">Gender</h2>
                    <h1 className="md:text-base font-medium">Male</h1>

                </div>

            </div>
            {/* Divider  */}
            <div className="divider w-2/3 mx-auto"></div>

            {/*Contact Info  */}
            <div className="w-2/3 mx-auto my-8">
                <h1 className="md:text-2xl font-medium my-5">Contact Info</h1>
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                    <h2 className="md:text-xl">Email</h2>
                    <h1 className="md:text-base font-medium">king20@gmail.com</h1>

                    <h2 className="md:text-xl">Phone</h2>
                    <h1 className="md:text-base font-medium">+880 17842655</h1>
                </div>
            </div>
            {/* Divider  */}
            <div className="divider w-2/3 mx-auto"></div>
            {/*Addresses*/}
            <div className="w-2/3 mx-auto my-8">
                <div className="my-5">
                    <h1 className="md:text-2xl font-medium">Addresses</h1>

                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                    <h2 className="md:text-xl">Home</h2>
                    <h1 className="md:text-base font-medium">Not Set</h1>

                    <h2 className="md:text-xl">Work</h2>
                    <h1 className="md:text-base font-medium">Not Set</h1>

                    <h2 className="md:text-xl">Other Addresses</h2>
                    <h1 className="md:text-base font-medium">None</h1>

                </div>
            </div>

            <div className="flex justify-none justify-around md:justify-end md:mr-14">
                <button className="p-2 rounded-lg hover:bg-black bg-[#F04336] text-white">Update Profile</button>
            </div>

        </div>

    </div>
    );
};

export default page;