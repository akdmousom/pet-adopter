import Image from "next/image";


const SettingProfile = () => {
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

          

        </div>

    </div>
    );
};

export default SettingProfile;