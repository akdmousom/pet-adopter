import img from '../../../../../public/images/userPorfile.svg'
import { auth } from '@/app/api/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserDropdown = async() => {

    const session = await auth();
  

    

    return (
        <div>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-14 rounded-full">
                    <Image width={200} height={200} alt="Tailwind CSS Navbar component"  src={session?.user ? session?.user?.image || session.user.picture : img} />

                </div>
            </div>
            <ul tabIndex={0} className="mt-3 gap-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
                {
                    session?.user ? <><li><Link href={"/userprofile"}>Profile</Link></li>
                    <li><Link href={"/dashboard"}>Dashboard</Link></li>
                    <li><Link href={"/api/auth/signout"}>SignOut</Link></li></> 
                    :
                    <>
                    <li><Link href={"/api/auth/signin"}>SignIn</Link></li>
                    <li><Link href={"/register"}>Register</Link></li>
                    </>
                }
                
            </ul>
        </div>
    );
};

export default UserDropdown;