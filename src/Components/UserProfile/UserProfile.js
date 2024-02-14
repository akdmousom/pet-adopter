import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import  useRouter from 'next/router';
// import { useRouter } from 'next/router';
import { auth } from '@/app/api/auth';
const UserProfile = async() => {
    const session = await auth();
    const user=session.user
    // console.log(user.name,'navabar')
    return (
        <div className="my-5 max-w-[1200px] mx-auto">

        <div className="bg-base-100 rounded-lg shadow-xl p-5 md:p-8">

            <div className="lg:flex items-center gap-5 w-2/3 mx-auto">
                {/* User Profile  */}
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <Image width={200} height={200} src={user.image} alt="" />
                    </div>
                </div>
                {/* User Name  */}
                <div className="space-y-3">
                    <h1 className="md:text-xl font-semibold">{user.name}</h1>
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
                            <p className="font-medium">{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Basic Info  */}
            <div className="w-2/3 mx-auto my-8">
                <h1 className="md:text-2xl font-medium my-5">Basic Info</h1>
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                    <h2 className="md:text-xl">Name</h2>
                    <h1 className="md:text-base font-medium">{user.name}</h1>

                    <h2 className="md:text-xl">Birthday</h2>
                    <h1 className="md:text-base font-medium">Not set</h1>

                    <h2 className="md:text-xl">Gender</h2>
                    <h1 className="md:text-base font-medium">Not set</h1>

                </div>

            </div>
            {/* Divider  */}
            <div className="divider w-2/3 mx-auto"></div>

            {/*Contact Info  */}
            <div className="w-2/3 mx-auto my-8">
                <h1 className="md:text-2xl font-medium my-5">Contact Info</h1>
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                    <h2 className="md:text-xl">Email</h2>
                    <h1 className="md:text-base font-medium">{user.email}</h1>

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
                <button className="p-2 rounded-lg hover:bg-red-600 bg-[#F04336] text-white">Update Profile</button>
            </div>

        </div>

    </div>
    );
};

export default UserProfile;