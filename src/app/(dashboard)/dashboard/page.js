// 'use client'
import '../../globals.css'
// import UserData from '@/components/UserData/UserData'
import { auth } from '@/app/api/auth';
import UserData from './../../../Components/UserData/UserData';
const page = async() => {
    const session = await auth();
        const user = session.user;  
    return (
        <div className='min-h-screen w-full'>
            <div className="bg-[#ffe3e1] lg:ml-1 w-full">
                <h1 className='py-10 text-3xl font-bold text-center w-full'>You Community Post</h1>
            </div>
            <UserData user={user} />
        </div>
    );
};

export default page;