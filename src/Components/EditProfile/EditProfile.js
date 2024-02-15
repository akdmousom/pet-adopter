import Image from "next/image";


const EditProfile = () => {
    return (
        <div className="bg-red-200 my-10">
        <div className="p-4">

            <div className="flex justify-around mx-20 md:mx-24 gap-5 my-4">
                <h1 className="md:text-xl font-semibold">Setting Profile</h1>
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image width={200} height={200} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                    </div>
                </div>
            </div>

            {/* Input Form  */}
            <div className="w-1/2 mx-auto my-10">
                <form className="space-y-4">

                    <div className="flex md:flex-row flex-col gap-5">
                        {/* First Name  */}
                        <label className="form-control w-full max-w-xs">
                            <span className="label-text-alt text-lg">First Name</span>
                            <input type="text" placeholder="First Name" id="" className="p-1 border-2 " />
                        </label>
                        {/* Last Name  */}
                        <label className="form-control w-full max-w-xs">
                            <span className="label-text-alt text-lg">Last Name</span>
                            <input type="text" placeholder="Last Name" id="" className="p-1 border-2 " />
                        </label>
                    </div>
                    {/* Email */}
                    <label className="form-control w-full">
                        <span className="label-text-alt text-lg">Email</span>
                        <input type="email" placeholder="Email" id="" className="p-1 border-2" />
                       
                    </label>
                    {/* Address */}
                    <label className="form-control w-full">
                        <span className="label-text-alt text-lg">Address</span>
                        <input type="text" placeholder="Address" id="" className="p-1 border-2" />
                    </label>
                    {/* Contact Number */}
                    <label className="form-control w-full">
                        <span className="label-text-alt text-lg">Contact Number</span>
                        <input type="number" placeholder="Contact Number" id="" className="p-1 border-2" />
                    </label>

                    <div className="flex md:flex-row flex-col gap-5">
                        {/* City  */}
                        <label className="form-control w-full max-w-xs">
                            <span className="label-text-alt text-lg">City</span>
                            <input type="text" placeholder="City" id="" className="p-1 border-2 " />
                        </label>
                        {/* State */}
                        <label className="form-control w-full max-w-xs">
                            <span className="label-text-alt text-lg">State</span>
                            <input type="text" placeholder="State" id="" className="p-1 border-2 " />
                        </label>
                    </div>
                    {/* Password */}
                    <label className="form-control w-full">
                        <span className="label-text-alt text-lg">Password</span>
                        <input type="password" placeholder="Password" id="" className="p-1 border-2" />
                    </label>

                </form>

                <div className="flex gap-7 my-7">
                    <button className="btn btn-sm btn-outline hover:bg-black border-[#F04336]">Cancel</button>
                    <button className="btn btn-sm text-white hover:bg-black bg-[#F04336]">Save</button>
                </div>

            </div>

        </div>

    </div>
    );
};

export default EditProfile;