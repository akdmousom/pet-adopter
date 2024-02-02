
import { auth } from '@/app/api/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserDropdown = async() => {

    const session = await auth();
    console.log(!!session);

    return (
        <div>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-14 rounded-full">
                    <Image width={200} height={200} alt="Tailwind CSS Navbar component" src={!!session?.user ? session?.user?.image : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />

                </div>
            </div>
            <ul tabIndex={0} className="mt-3 gap-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
                {
                    session?.user ? <><li><a >Profile</a></li>
                    <li><Link href={"#"}>Dashboard</Link></li>
                    <li><Link href={"/api/auth/signout"}>SignOut</Link></li></> : <><li><Link href={"/login"}>SignIn</Link></li></>
                }
                
            </ul>
        </div>
    );
};

export default UserDropdown;