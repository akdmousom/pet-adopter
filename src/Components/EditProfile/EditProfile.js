"use client"

import Image from "next/image";
const EditProfile = () => {

    const handleEdit = e=>{
        e.preventDefault()
        const form = e.target;
        const name1 = form.name1.value;
        const name2 = form.name2.value;
        const email = form.email.value;
        const address = form.address.value;
        const contact = form.contact.value;
        const city = form.city.value;
        const state = form.state.value;
        const password = form.password.value;
        const result = {name1,name2,email,address,contact,city,state,password}
        console.log(result);
    }


    return (
        <div className="bg-red-200 max-w-[1366px] shadow-xl mx-auto ">
        <div className="p-3">

            <div className="flex items-center  w-4/5  mx-auto gap-5 my-4">
                <div className="avatar ">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image width={200} height={200} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                    </div>
                </div>
                <h1 className="md:text-xl font-semibold">Edit Profile</h1>
            </div>

            {/* Input Form  */}
            <div className="w-4/5 mx-auto my-10">
                <form onSubmit={handleEdit} className="space-y-4">

                    <div className="flex md:flex-row flex-col gap-5">
                        {/* First Name  */}
                        <label className="form-control w-full">
                            <span className="label-text-alt font-medium text-lg">First Name</span>
                            <input type="text" name="name1" placeholder="First Name" id="" className="p-1 border-2 " />
                        </label>
                        {/* Last Name  */}
                        <label className="form-control w-full">
                            <span className="label-text-alt font-medium text-lg">Last Name</span>
                            <input type="text" name="name2" placeholder="Last Name" id="" className="p-1 border-2 " />
                        </label>
                    </div>
                    {/* Email */}
                    <label className="form-control w-full">
                        <span className="label-text-alt font-medium text-lg">Email</span>
                        <input type="email" name="email" placeholder="Email" id="" className="p-1 border-2" />
                       
                    </label>
                    {/* Address */}
                    <label className="form-control w-full">
                        <span className="label-text-alt font-medium text-lg">Address</span>
                        <input type="text" name="address" placeholder="Address" id="" className="p-1 border-2" />
                    </label>
                    {/* Contact Number */}
                    <label className="form-control w-full">
                        <span className="label-text-alt font-medium text-lg">Contact Number</span>
                        <input type="number" name="contact" placeholder="Contact Number" id="" className="p-1 border-2" />
                    </label>

                    <div className="flex md:flex-row flex-col gap-5">
                        {/* City  */}
                        <label className="form-control w-full">
                            <span className="label-text-alt font-medium text-lg">City</span>
                            <input type="text" name="city" placeholder="City" id="" className="p-1 border-2 " />
                        </label>
                        {/* State */}
                        <label className="form-control w-full">
                            <span className="label-text-alt font-medium text-lg">State</span>
                            <input type="text" name="state" placeholder="State" id="" className="p-1 border-2 " />
                        </label>
                    </div>
                    {/* Password */}
                    <label className="form-control w-full">
                        <span className="label-text-alt font-medium text-lg">Password</span>
                        <input type="password" name="password" placeholder="Password" id="" className="p-1 border-2" />
                    </label>
                    
                <div className="flex gap-7">
                    <button className="btn btn-sm btn-outline hover:bg-black border-[#F04336]">Cancel</button>
                    <button className="btn btn-sm text-white hover:bg-black bg-[#F04336]">Save</button>
                </div>

                </form>


            </div>

        </div>

    </div>
    );
};

export default EditProfile;